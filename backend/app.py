from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import os

app = Flask(__name__)
CORS(app)

# Load the TFLite model
interpreter = tf.lite.Interpreter(model_path='model.tflite')
interpreter.allocate_tensors()

# Get input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Define the class labels
CLASS_LABELS = ['ARMD', 'Cataract', 'Diabetic Retinopathy', 'Glaucoma', 'Normal']

def preprocess_image(image_bytes):
    # Convert bytes to PIL Image
    img = Image.open(io.BytesIO(image_bytes))
    
    # Resize image to match model input size (224x224)
    img = img.resize((224, 224))
    
    # Convert to numpy array and normalize
    img_array = np.array(img, dtype=np.float32) / 255.0
    
    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if image file is present in request
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400
        
        # Get the image file
        image_file = request.files['image']
        image_bytes = image_file.read()
        
        # Preprocess the image
        processed_image = preprocess_image(image_bytes)
        
        # Set the input tensor
        interpreter.set_tensor(input_details[0]['index'], processed_image)
        
        # Run inference
        interpreter.invoke()
        
        # Get the output tensor
        predictions = interpreter.get_tensor(output_details[0]['index'])[0]
        
        # Get the predicted class and confidence scores
        predicted_class = CLASS_LABELS[np.argmax(predictions)]
        confidence_scores = {
            label: float(score) for label, score in zip(CLASS_LABELS, predictions)
        }
        
        # Prepare response
        response = {
            'prediction': predicted_class,
            'confidence': confidence_scores,
            'filename': image_file.filename
        }
        
        return jsonify(response)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True) 