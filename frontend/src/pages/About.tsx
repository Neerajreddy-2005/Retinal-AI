import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import TensorFlowIcon from "@/components/icons/TensorFlowIcon";
import NeuralNetworkIcon from "@/components/icons/NeuralNetworkIcon";
import TransferLearningIcon from "@/components/icons/TransferLearningIcon";
import {
  ResponsiveContainer, 
  Tooltip,
  XAxis, 
  YAxis,
  Area, 
  ComposedChart,
  CartesianGrid
} from "recharts";

const About = () => {
  const technologies = [
    {
      name: "TensorFlow 2.9.1",
      description: "Powers our advanced neural network model for image analysis",
      icon: <TensorFlowIcon className="h-8 w-8 text-primary" />
    },
    {
      name: "ResNet50 Architecture",
      description: "Deep residual learning framework for superior image recognition",
      icon: <NeuralNetworkIcon className="h-8 w-8 text-secondary" />
    },
    {
      name: "Transfer Learning",
      description: "Leverages pre-trained networks adapted for retinal disease detection",
      icon: <TransferLearningIcon className="h-8 w-8 text-primary" />
    },
    {
      name: "Medical Validation",
      description: "Trained and tested with ophthalmologist-validated datasets",
      icon: <Award className="h-8 w-8 text-secondary" />
    }
  ];

  const confusionMatrixData = [
    { name: "ARMD", ARMD: 51, cataract: 0, diabetic_retinopathy: 0, glaucoma: 0, normal: 0 },
    { name: "cataract", ARMD: 0, cataract: 99, diabetic_retinopathy: 0, glaucoma: 1, normal: 4 },
    { name: "diabetic_retinopathy", ARMD: 0, cataract: 0, diabetic_retinopathy: 109, glaucoma: 0, normal: 1 },
    { name: "glaucoma", ARMD: 0, cataract: 0, diabetic_retinopathy: 0, glaucoma: 94, normal: 7 },
    { name: "normal", ARMD: 0, cataract: 4, diabetic_retinopathy: 0, glaucoma: 6, normal: 97 }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 leading-tight px-4">
          Pioneering AI in Eye Care
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-foreground/80 max-w-4xl mx-auto text-center font-medium leading-relaxed pb-4 px-6">
          Leading the revolution in early detection and management of retinal diseases 
          through advanced artificial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>
          <p className="text-foreground/80 mb-6 text-lg leading-relaxed pb-1">
            At RetinalAI, we're revolutionizing eye disease detection through innovative AI technology. 
            Our mission is to make advanced diagnostic capabilities accessible worldwide, helping prevent 
            vision loss through early detection.
          </p>
          <p className="text-foreground/80 mb-6 text-lg leading-relaxed pb-1">
            With our state-of-the-art deep learning models, we've achieved a remarkable 
            <span className="text-primary font-bold"> 95.4% accuracy</span> in detecting common 
            retinal conditions, matching the precision of experienced ophthalmologists.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed pb-1">
            We believe that prevention is the key to preserving vision. Our platform serves as a 
            crucial screening tool, enabling timely interventions and providing peace of mind 
            through reliable results.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-200 via-pink-100 to-rose-50 p-8 rounded-2xl shadow-lg order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">What We Detect</h2>
          <ul className="space-y-4">
            <li className="flex items-start bg-white/60 backdrop-blur-sm p-4 rounded-lg hover:bg-white/80 transition-colors duration-300">
              <span className="text-fuchsia-500 font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-purple-800 mb-1">Cataract</h3>
                <p className="text-gray-700 font-medium leading-relaxed pb-1">Clouding of the normally clear lens of the eye, causing blurry vision.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/60 backdrop-blur-sm p-4 rounded-lg hover:bg-white/80 transition-colors duration-300">
              <span className="text-fuchsia-500 font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-purple-800 mb-1">Age-related Macular Degeneration (AMD)</h3>
                <p className="text-gray-700 font-medium leading-relaxed pb-1">Deterioration of the central portion of the retina, affecting central vision.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/60 backdrop-blur-sm p-4 rounded-lg hover:bg-white/80 transition-colors duration-300">
              <span className="text-fuchsia-500 font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-purple-800 mb-1">Diabetic Retinopathy (DR)</h3>
                <p className="text-gray-700 font-medium leading-relaxed pb-1">Diabetes complication that damages blood vessels in the retina, potentially leading to blindness.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/60 backdrop-blur-sm p-4 rounded-lg hover:bg-white/80 transition-colors duration-300">
              <span className="text-fuchsia-500 font-bold mr-2">•</span>
              <div>
                <h3 className="font-bold text-purple-800 mb-1">Glaucoma</h3>
                <p className="text-gray-700 font-medium leading-relaxed pb-1">Group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in the eye.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <NeuralNetworkIcon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">Deep Neural Networks</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our system uses multiple layers of neural networks to identify patterns in retinal images that may be invisible to the human eye.
                </p>
              </div>

              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <TensorFlowIcon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">TensorFlow Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built on Google's TensorFlow, our models benefit from continuous optimization and scaling across different deployment scenarios.
                </p>
              </div>

              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <TransferLearningIcon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transfer Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage pre-trained models to achieve exceptional accuracy even with limited training data for rare conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#F3F0FF] p-8 rounded-2xl shadow-xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#6C2BD9]">Performance Metrics</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-[#F8F6FF] backdrop-blur-sm p-6 rounded-xl">
            <h3 className="font-medium text-2xl mb-3 text-[#7E57C2] text-center">Model Accuracy Analysis</h3>
            <div className="flex justify-center items-center h-64">
              <div className="w-64 h-64 rounded-full bg-[#F3F0FF] flex items-center justify-center border-8 border-[#F8F6FF] shadow-lg">
                <div>
                  <p className="text-6xl font-bold text-[#7C4DFF]">95.4<span className="text-3xl">%</span></p>
                  <p className="text-[#777777] text-center font-medium">Test Accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-xl mb-3 text-[#7E57C2] text-center">Confusion Matrix</h3>
                <div className="bg-white p-4 rounded-xl">
                  <img 
                    src="/lovable-uploads/85d673a0-fb60-430d-81b5-04b1288d9361.png" 
                    alt="Confusion Matrix" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-xl mb-3 text-[#7E57C2] text-center">Detailed Metrics</h3>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-[#F3F0FF]">
                            <th className="text-left py-2 text-[#6C2BD9] font-bold">Class</th>
                            <th className="text-center py-2 text-[#6C2BD9] font-bold">Precision</th>
                            <th className="text-center py-2 text-[#6C2BD9] font-bold">Recall</th>
                            <th className="text-center py-2 text-[#6C2BD9] font-bold">F1-Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-[#F3F0FF]">
                            <td className="py-2 text-[#2E2E2E]">ARMD</td>
                            <td className="text-center text-[#2E2E2E]">1.00</td>
                            <td className="text-center text-[#2E2E2E]">1.00</td>
                            <td className="text-center text-[#2E2E2E]">1.00</td>
                          </tr>
                          <tr className="border-b border-[#F3F0FF]">
                            <td className="py-2 text-[#2E2E2E]">Cataract</td>
                            <td className="text-center text-[#2E2E2E]">0.96</td>
                            <td className="text-center text-[#2E2E2E]">0.95</td>
                            <td className="text-center text-[#2E2E2E]">0.96</td>
                          </tr>
                          <tr className="border-b border-[#F3F0FF]">
                            <td className="py-2 text-[#2E2E2E]">Diabetic Retinopathy</td>
                            <td className="text-center text-[#2E2E2E]">1.00</td>
                            <td className="text-center text-[#2E2E2E]">0.99</td>
                            <td className="text-center text-[#2E2E2E]">1.00</td>
                          </tr>
                          <tr className="border-b border-[#F3F0FF]">
                            <td className="py-2 text-[#2E2E2E]">Glaucoma</td>
                            <td className="text-center text-[#2E2E2E]">0.93</td>
                            <td className="text-center text-[#2E2E2E]">0.93</td>
                            <td className="text-center text-[#2E2E2E]">0.93</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-[#2E2E2E]">Normal</td>
                            <td className="text-center text-[#2E2E2E]">0.89</td>
                            <td className="text-center text-[#2E2E2E]">0.91</td>
                            <td className="text-center text-[#2E2E2E]">0.90</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-xl mb-3 text-[#7E57C2] text-center">Dataset Information</h3>
                  <div className="bg-white p-6 rounded-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-[#6C2BD9] font-medium mb-3">Training & Validation Datasets</h4>
                        <ul className="text-[#2E2E2E] text-sm space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="text-[#E91E63]">•</span>
                            <span>ARMD Curated Dataset 2023</span>
                            <a 
                              href="https://www.kaggle.com/datasets/rakhshandamujib/armd-curated-dataset-2023"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-[#7C4DFF] transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[#E91E63]">•</span>
                            <span>Origa Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/arnavjain1/glaucoma-datasets"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-[#7C4DFF] transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[#E91E63]">•</span>
                            <span>Refuge Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/arnavjain1/glaucoma-datasets"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-[#7C4DFF] transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[#E91E63]">•</span>
                            <span>Aptos2019 Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/mariaherrerot/aptos2019"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-[#7C4DFF] transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[#E91E63]">•</span>
                            <span>ODIR-5K Classification Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/tanjemahamed/odir5k-classification"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-[#7C4DFF] transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-[#E91E63]">•</span>
                            <span>ODIR-5K Dataset</span>
                            <a 
                              href="https://www.kaggle.com/datasets/andrewmvd/ocular-disease-recognition-odir5k"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-[#7C4DFF] transition-colors"
                            >
                              <img src="/external_link.png" alt="External Link" className="w-4 h-4" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[#6C2BD9] font-medium mb-3">Dataset Statistics</h4>
                        <ul className="text-[#2E2E2E] text-sm space-y-1">
                          <li><span className="text-[#E91E63]">•</span> Total Images: Approximately 14,000</li>
                          <li><span className="text-[#E91E63]">•</span> Balanced class distribution</li>
                          <li><span className="text-[#E91E63]">•</span> High-quality Images</li>
                          <li><span className="text-[#E91E63]">•</span> Pre-defined class Labels</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#777777] text-center leading-relaxed mt-8">
              Our model achieves exceptional performance across all disease categories, with particularly high accuracy in Cataract, Diabetic Retinopathy, and Glaucoma detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
