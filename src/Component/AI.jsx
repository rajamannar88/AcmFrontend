import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Image, MessageSquare, Code, Music, Video, FileText, Search, Brain, Palette, Mic, Camera, Bot, Zap } from 'lucide-react';

const AIToolsDirectory = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedTool, setSelectedTool] = useState(null);

  const aiToolsData = {
    "Image Generation": {
      icon: <Image className="w-5 h-5" />,
      tools: [
        { name: "Craiyon", url: "https://craiyon.com", description: "Free AI image generator with unlimited generations", pricing: "free", badge: "100% Free" },
        { name: "Bing Image Creator", url: "https://bing.com/create", description: "Microsoft's free AI image tool powered by DALL-E", pricing: "free", badge: "100% Free" },
        { name: "Google ImageFX", url: "https://aitestkitchen.withgoogle.com/tools/image-fx", description: "Google's experimental AI image generation tool", pricing: "free", badge: "100% Free" },
        { name: "Stable Diffusion Web", url: "https://stablediffusionweb.com", description: "Free web interface for Stable Diffusion models", pricing: "free", badge: "100% Free" },
        { name: "Ideogram", url: "https://ideogram.ai", description: "Free AI image generator with text rendering", pricing: "free", badge: "100% Free" },
        { name: "DALL-E 2", url: "https://openai.com/dall-e-2", description: "AI image generator by OpenAI - 15 free credits monthly", pricing: "freemium", badge: "Free Credits" },
        { name: "Leonardo AI", url: "https://leonardo.ai", description: "Creative AI image generation - 150 tokens daily", pricing: "freemium", badge: "Free Tier" },
        { name: "Playground AI", url: "https://playgroundai.com", description: "AI image creation platform - 1000 images/day", pricing: "freemium", badge: "Free Tier" },
        { name: "DeepAI", url: "https://deepai.org", description: "Various AI image tools with free usage", pricing: "freemium", badge: "Free Tier" },
        { name: "NightCafe", url: "https://nightcafe.studio", description: "AI art generator - 5 free credits daily", pricing: "freemium", badge: "Free Credits" },
        { name: "Artbreeder", url: "https://artbreeder.com", description: "Collaborative AI art creation - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Dream by WOMBO", url: "https://dream.ai", description: "Mobile-first AI art generator - unlimited free art", pricing: "freemium", badge: "Free Tier" }
      ]
    },
    "Text & Writing": {
      icon: <FileText className="w-5 h-5" />,
      tools: [
        { name: "ChatGPT", url: "https://chat.openai.com", description: "Conversational AI assistant - GPT-3.5 free", pricing: "freemium", badge: "Free Tier" },
        { name: "Claude", url: "https://claude.ai", description: "Anthropic's AI assistant - free conversations daily", pricing: "freemium", badge: "Free Tier" },
        { name: "Gemini", url: "https://gemini.google.com", description: "Google's AI chatbot - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Perplexity", url: "https://perplexity.ai", description: "AI-powered search engine - 5 Pro searches daily", pricing: "freemium", badge: "Free Tier" },
        { name: "Poe by Quora", url: "https://poe.com", description: "Access multiple AI models - limited free usage", pricing: "freemium", badge: "Free Tier" },
        { name: "Character.ai", url: "https://character.ai", description: "Chat with AI characters - free with rate limits", pricing: "freemium", badge: "Free Tier" },
        { name: "Rytr", url: "https://rytr.me", description: "AI writing assistant - 10k characters monthly", pricing: "freemium", badge: "Free Tier" },
        { name: "Writesonic", url: "https://writesonic.com", description: "AI content creation - 10k words monthly", pricing: "freemium", badge: "Free Trial" },
        { name: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing tool - 125 words limit", pricing: "freemium", badge: "Free Tier" },
        { name: "Grammarly", url: "https://grammarly.com", description: "AI writing assistant - basic grammar check free", pricing: "freemium", badge: "Free Tier" },
        { name: "Copy.ai", url: "https://copy.ai", description: "AI copywriting assistant - 2k words monthly", pricing: "freemium", badge: "Free Trial" },
        { name: "Hemingway Editor", url: "https://hemingwayapp.com", description: "Writing clarity tool - web version free", pricing: "freemium", badge: "Free Web" }
      ]
    },
    "Code & Programming": {
      icon: <Code className="w-5 h-5" />,
      tools: [
        { name: "Claude", url: "https://claude.ai", description: "AI coding and programming assistant with free tier", pricing: "freemium", badge: "Free Tier" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI pair programmer - free for students & open source", pricing: "freemium", badge: "Free for Students" },
        { name: "Codeium", url: "https://codeium.com", description: "Free AI code assistant - unlimited individual use", pricing: "free", badge: "100% Free" },
        { name: "Tabnine", url: "https://tabnine.com", description: "AI code completion - basic model free", pricing: "freemium", badge: "Free Tier" },
        { name: "Replit Ghostwriter", url: "https://replit.com", description: "AI coding assistant - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "CodeT5", url: "https://huggingface.co/Salesforce/codet5-base", description: "Open-source code generation model", pricing: "free", badge: "100% Free" },
        { name: "Amazon CodeWhisperer", url: "https://aws.amazon.com/codewhisperer", description: "AI coding companion - free for individual use", pricing: "freemium", badge: "Free Tier" },
        { name: "Sourcery", url: "https://sourcery.ai", description: "AI code refactoring - free for open source", pricing: "freemium", badge: "Free Tier" },
        { name: "Blackbox AI", url: "https://blackbox.ai", description: "AI code generation - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Phind", url: "https://phind.com", description: "AI search for developers - free searches daily", pricing: "freemium", badge: "Free Tier" },
        { name: "Cursor", url: "https://cursor.sh", description: "AI-powered code editor - free tier available", pricing: "freemium", badge: "Free Tier" }
      ]
    },
    "Audio & Music": {
      icon: <Music className="w-5 h-5" />,
      tools: [
        { name: "Mubert", url: "https://mubert.com", description: "AI music generation - free tier with watermark", pricing: "freemium", badge: "Free Tier" },
        { name: "AIVA", url: "https://aiva.ai", description: "AI music composer - 3 downloads monthly", pricing: "freemium", badge: "Free Tier" },
        { name: "Boomy", url: "https://boomy.com", description: "Create AI songs instantly - free with limits", pricing: "freemium", badge: "Free Tier" },
        { name: "Soundraw", url: "https://soundraw.io", description: "AI music generator - free trial available", pricing: "freemium", badge: "Free Trial" },
        { name: "Beatoven.ai", url: "https://beatoven.ai", description: "AI background music - 15 minutes monthly", pricing: "freemium", badge: "Free Minutes" },
        { name: "Jukebox", url: "https://openai.com/research/jukebox", description: "OpenAI's music generation research tool", pricing: "free", badge: "Research Tool" },
        { name: "Endel", url: "https://endel.io", description: "AI adaptive music - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Brain.fm", url: "https://brain.fm", description: "AI-generated focus music - 7-day free trial", pricing: "freemium", badge: "Free Trial" },
        { name: "Suno AI", url: "https://suno.ai", description: "AI song generator - free credits daily", pricing: "freemium", badge: "Free Tier" },
        { name: "Loudly", url: "https://loudly.com", description: "AI music for content creators - free tier", pricing: "freemium", badge: "Free Tier" }
      ]
    },
    "Video & Animation": {
      icon: <Video className="w-5 h-5" />,
      tools: [
        { name: "Runway ML", url: "https://runwayml.com", description: "AI video editing suite - free credits monthly", pricing: "freemium", badge: "Free Credits" },
        { name: "Pika Labs", url: "https://pika.art", description: "AI video generation - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Stable Video Diffusion", url: "https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt", description: "Open source video AI model", pricing: "free", badge: "100% Free" },
        { name: "LeiaPix", url: "https://convert.leiapix.com", description: "2D to 3D image animation - unlimited free", pricing: "free", badge: "100% Free" },
        { name: "Synthesia", url: "https://synthesia.io", description: "AI video generation - free trial available", pricing: "trial", badge: "Free Trial" },
        { name: "Pictory", url: "https://pictory.ai", description: "AI video creation - free trial available", pricing: "trial", badge: "Free Trial" },
        { name: "Lumen5", url: "https://lumen5.com", description: "AI video maker - 3 videos monthly", pricing: "freemium", badge: "Free Tier" },
        { name: "D-ID", url: "https://d-id.com", description: "AI talking head videos - free trial credits", pricing: "trial", badge: "Free Trial" },
        { name: "Kaiber", url: "https://kaiber.ai", description: "AI video generation - free credits available", pricing: "freemium", badge: "Free Credits" },
        { name: "InVideo", url: "https://invideo.io", description: "AI video creation platform - free tier", pricing: "freemium", badge: "Free Tier" }
      ]
    },
    "Voice & Speech": {
      icon: <Mic className="w-5 h-5" />,
      tools: [
        { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice synthesis - 10k characters monthly", pricing: "freemium", badge: "Free Characters" },
        { name: "Murf", url: "https://murf.ai", description: "AI voice generator - free trial available", pricing: "freemium", badge: "Free Trial" },
        { name: "Speechify", url: "https://speechify.com", description: "AI text-to-speech - limited free tier", pricing: "freemium", badge: "Free Tier" },
        { name: "Natural Reader", url: "https://naturalreaders.com", description: "Free text-to-speech - 20 minutes daily", pricing: "freemium", badge: "Free Tier" },
        { name: "TTSMaker", url: "https://ttsmaker.com", description: "Free online TTS - unlimited use", pricing: "free", badge: "100% Free" },
        { name: "Descript", url: "https://descript.com", description: "AI audio editing - 1 hour monthly", pricing: "freemium", badge: "Free Tier" },
        { name: "Resemble AI", url: "https://resemble.ai", description: "Voice cloning AI - free trial available", pricing: "freemium", badge: "Free Trial" },
        { name: "Replica Studios", url: "https://replicastudios.com", description: "AI voice actors - free credits available", pricing: "freemium", badge: "Free Credits" },
        { name: "Listnr", url: "https://listnr.tech", description: "AI voice generation - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Coqui TTS", url: "https://coqui.ai", description: "Open source text-to-speech", pricing: "free", badge: "100% Free" }
      ]
    },
    "Search & Research": {
      icon: <Search className="w-5 h-5" />,
      tools: [
        { name: "Perplexity AI", url: "https://perplexity.ai", description: "AI research assistant - 5 Pro searches daily", pricing: "freemium", badge: "Free Tier" },
        { name: "You.com", url: "https://you.com", description: "AI-powered search - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Bing Chat", url: "https://bing.com/chat", description: "Microsoft's AI search - completely free", pricing: "free", badge: "100% Free" },
        { name: "Phind", url: "https://phind.com", description: "AI search for developers - free searches daily", pricing: "freemium", badge: "Free Tier" },
        { name: "Consensus", url: "https://consensus.app", description: "AI research papers search - 20 searches monthly", pricing: "freemium", badge: "Free Searches" },
        { name: "Elicit", url: "https://elicit.org", description: "AI research assistant - 5k credits monthly", pricing: "freemium", badge: "Free Credits" },
        { name: "Semantic Scholar", url: "https://semanticscholar.org", description: "AI-powered academic search - completely free", pricing: "free", badge: "100% Free" },
        { name: "Connected Papers", url: "https://connectedpapers.com", description: "Research paper visualization - 5 graphs monthly", pricing: "freemium", badge: "Free Graphs" },
        { name: "ResearchRabbit", url: "https://researchrabbitapp.com", description: "Literature discovery tool - completely free", pricing: "free", badge: "100% Free" },
        { name: "Scite", url: "https://scite.ai", description: "Smart citations analysis - free tier available", pricing: "freemium", badge: "Free Tier" }
      ]
    },
    "Design & Creative": {
      icon: <Palette className="w-5 h-5" />,
      tools: [
        { name: "Canva AI", url: "https://canva.com", description: "AI design assistant - free tier with AI features", pricing: "freemium", badge: "Free Tier" },
        { name: "Figma AI", url: "https://figma.com", description: "AI-powered design - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Looka", url: "https://looka.com", description: "AI logo maker - free logo generation", pricing: "freemium", badge: "Free Trial" },
        { name: "Brandmark", url: "https://brandmark.io", description: "AI brand identity - free watermarked logos", pricing: "freemium", badge: "Free Trial" },
        { name: "Designs.ai", url: "https://designs.ai", description: "AI design platform - free trial available", pricing: "freemium", badge: "Free Trial" },
        { name: "Beautiful.ai", url: "https://beautiful.ai", description: "AI presentation maker - free trial available", pricing: "freemium", badge: "Free Trial" },
        { name: "Gamma", url: "https://gamma.app", description: "AI presentation tool - free presentations monthly", pricing: "freemium", badge: "Free Tier" },
        { name: "Ideogram", url: "https://ideogram.ai", description: "Free AI image generator with text rendering", pricing: "free", badge: "100% Free" },
        { name: "Remove.bg", url: "https://remove.bg", description: "AI background removal - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Upscale.media", url: "https://upscale.media", description: "AI image upscaling - free tier available", pricing: "freemium", badge: "Free Tier" }
      ]
    },
    "Productivity & Automation": {
      icon: <Zap className="w-5 h-5" />,
      tools: [
        { name: "Notion AI", url: "https://notion.so", description: "AI-powered workspace - free AI responses", pricing: "freemium", badge: "Free Tier" },
        { name: "Zapier AI", url: "https://zapier.com", description: "AI automation platform - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "ClickUp AI", url: "https://clickup.com", description: "AI productivity suite - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting transcription - 600 minutes monthly", pricing: "freemium", badge: "Free Minutes" },
        { name: "Calendly AI", url: "https://calendly.com", description: "AI scheduling assistant - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Krisp", url: "https://krisp.ai", description: "AI noise cancellation - 60 minutes weekly", pricing: "freemium", badge: "Free Minutes" },
        { name: "Motion", url: "https://usemotion.com", description: "AI calendar assistant - 7-day free trial", pricing: "trial", badge: "Free Trial" },
        { name: "Reclaim.ai", url: "https://reclaim.ai", description: "AI time blocking - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "Todoist", url: "https://todoist.com", description: "Task management with AI features - free tier", pricing: "freemium", badge: "Free Tier" },
        { name: "Clockwise", url: "https://clockwise.com", description: "AI focus time scheduler - free tier", pricing: "freemium", badge: "Free Tier" }
      ]
    },
    "Machine Learning": {
      icon: <Brain className="w-5 h-5" />,
      tools: [
        { name: "Hugging Face", url: "https://huggingface.co", description: "ML model hub - free tier with GPU hours", pricing: "freemium", badge: "Free Tier" },
        { name: "Google Colab", url: "https://colab.research.google.com", description: "Free ML environment - GPU access included", pricing: "free", badge: "100% Free" },
        { name: "Kaggle", url: "https://kaggle.com", description: "ML competitions platform - free GPU hours", pricing: "free", badge: "100% Free" },
        { name: "Papers with Code", url: "https://paperswithcode.com", description: "ML research repository - completely free", pricing: "free", badge: "100% Free" },
        { name: "TensorFlow", url: "https://tensorflow.org", description: "Open ML framework - completely free", pricing: "free", badge: "100% Free" },
        { name: "PyTorch", url: "https://pytorch.org", description: "ML research framework - completely free", pricing: "free", badge: "100% Free" },
        { name: "Weights & Biases", url: "https://wandb.ai", description: "ML experiment tracking - free tier available", pricing: "freemium", badge: "Free Tier" },
        { name: "MLflow", url: "https://mlflow.org", description: "ML lifecycle platform - completely free", pricing: "free", badge: "100% Free" },
        { name: "Roboflow", url: "https://roboflow.com", description: "Computer vision platform - free tier", pricing: "freemium", badge: "Free Tier" },
        { name: "Gradio", url: "https://gradio.app", description: "ML demo creation - free tier available", pricing: "freemium", badge: "Free Tier" }
      ]
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mt-3 mb-2">NPRCET Free AI Tools Directory</h1>
          <p className="text-slate-300">Discover AI tools with free tiers, trials, and 100% free options</p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-slate-400">100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="text-slate-400">Free Tier</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              <span className="text-slate-400">Free Trial</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Directory Tree */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-400" />
              AI Tools Categories
            </h2>
            
            <div className="space-y-2">
              {Object.entries(aiToolsData).map(([category, data]) => (
                <div key={category} className="border border-slate-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center gap-3 p-4 bg-slate-700/50 hover:bg-slate-700 transition-colors duration-200 text-left"
                  >
                    {expandedCategories[category] ? 
                      <ChevronDown className="w-4 h-4 text-purple-400" /> : 
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                    }
                    <span className="text-purple-400">{data.icon}</span>
                    <span className="text-white font-medium">{category}</span>
                    <span className="text-slate-400 text-sm ml-auto">
                      {data.tools.length} tools
                    </span>
                  </button>
                  
                  {expandedCategories[category] && (
                    <div className="bg-slate-800/30 p-2">
                      {data.tools.map((tool) => (
                        <button
                          key={tool.name}
                          onClick={() => handleToolClick(tool)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-slate-700/50 rounded-lg transition-colors duration-200 text-left group"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {tool.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                                {tool.name}
                              </h3>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                tool.pricing === 'free' ? 'bg-green-500/20 text-green-400' :
                                tool.pricing === 'freemium' ? 'bg-blue-500/20 text-blue-400' :
                                tool.pricing === 'trial' ? 'bg-orange-500/20 text-orange-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {tool.badge}
                              </span>
                            </div>
                            <p className="text-slate-400 text-sm truncate">
                              {tool.description}
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tool Details Panel */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-400" />
              Tool Details
            </h2>
            
            {selectedTool ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {selectedTool.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{selectedTool.name}</h3>
                    <p className="text-slate-400 text-sm">AI Tool</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium mb-2">Pricing</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedTool.pricing === 'free' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      selectedTool.pricing === 'freemium' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      selectedTool.pricing === 'trial' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {selectedTool.badge}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-1">Description</h4>
                    <p className="text-slate-300 text-sm">{selectedTool.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Quick Actions</h4>
                    <div className="space-y-2">
                      <a
                        href={selectedTool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center text-sm font-medium"
                      >
                        Visit Website
                      </a>
                      <button
                        onClick={() => navigator.clipboard.writeText(selectedTool.url)}
                        className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-center text-sm font-medium"
                      >
                        Copy URL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Bot className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-400">Select a tool from the directory to view details</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {Object.keys(aiToolsData).length}
            </div>
            <div className="text-slate-400 text-sm">Categories</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {Object.values(aiToolsData).reduce((total, category) => total + category.tools.length, 0)}
            </div>
            <div className="text-slate-400 text-sm">Total Tools</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-4 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
            <div className="text-slate-400 text-sm">Free to Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsDirectory;