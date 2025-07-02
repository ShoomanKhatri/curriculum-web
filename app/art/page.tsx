"use client";
import {
  Sparkles,
  Music,
  Palette,
  Drama,
  Calculator,
  BookOpen,
  FlaskConical,
  Users,
  FileText,
  Award,
  Target,
  Heart,
  Brain,
  Lightbulb,
  Home,
  ListIcon,
  Camera,
  Smartphone,
  Tablet,
  Clock,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function ArtPage() {
  const ageGroups = [
    {
      age: "0-2 Years",
      color: "bg-yellow-100 border-yellow-300",
      image:
        "https://www.artycraftykids.com/wp-content/uploads/2016/10/Baby-Bubble-Wrap-Art-Pin--768x1313.jpg",
      activities: [
        {
          title: "Sensory Paint Exploration",
          description:
            "Provide non-toxic finger paints in primary colors in shallow trays. Allow infants to explore texture and color through supervised hand exploration. Support sensory development, cause-and-effect understanding, and early mark-making skills. Use washable smocks and lay plastic sheeting for easy cleanup.",
          reference:
            "Adapted from Schirrmacher, R. (2006). Art as therapy and education for children.",
          timeline: [
            {
              time: "0-5 min",
              activity: "Setup materials and safety preparation",
              icon: "setup",
            },
            {
              time: "5-15 min",
              activity: "Guided sensory exploration with paint",
              icon: "explore",
            },
            {
              time: "15-20 min",
              activity: "Observation and documentation of responses",
              icon: "document",
            },
            {
              time: "20-25 min",
              activity: "Cleanup and reflection with educator",
              icon: "cleanup",
            },
          ],
        },
        {
          title: "Natural Material Collage",
          description:
            "Offer large, safe natural materials like smooth leaves, flower petals, and rounded stones for supervised exploration. Provide contact paper with sticky side up for children to place materials. Supports fine motor development, sensory exploration, and understanding of natural textures and colors.",
          reference:
            "Based on Reggio Emilia approach to natural materials (Edwards et al., 2012)",
          timeline: [
            {
              time: "0-3 min",
              activity: "Introduction to natural materials",
              icon: "setup",
            },
            {
              time: "3-12 min",
              activity: "Free exploration and placement on contact paper",
              icon: "explore",
            },
            {
              time: "12-18 min",
              activity: "Guided discussion about textures and colors",
              icon: "discuss",
            },
            {
              time: "18-20 min",
              activity: "Display and celebrate creations",
              icon: "celebrate",
            },
          ],
        },
      ],
    },
    {
      age: "2-3 Years",
      color: "bg-green-100 border-green-300",
      image:
        "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?w=400&h=300&fit=crop&crop=center",
      activities: [
        {
          title: "Big Brush Painting at Easels",
          description:
            "Set up easels with large brushes (1-2 inches wide) and washable tempera paints in primary colors. Encourage whole-arm movements and color mixing. Support gross motor development, hand-eye coordination, and color recognition. Provide smocks and have wet cloths nearby for cleanup.",
          reference:
            "Koster, J. B. (2015). Growing artists: Teaching the arts to young children",
          timeline: [
            {
              time: "0-5 min",
              activity: "Easel setup and smock preparation",
              icon: "setup",
            },
            {
              time: "5-20 min",
              activity: "Free painting with large brush movements",
              icon: "explore",
            },
            {
              time: "20-25 min",
              activity: "Color mixing demonstration and practice",
              icon: "learn",
            },
            {
              time: "25-30 min",
              activity: "Sharing artwork and cleanup",
              icon: "share",
            },
          ],
        },
        {
          title: "Homemade Playdough Sculptures",
          description:
            "Provide homemade salt-flour playdough with simple tools like wooden spoons, cookie cutters, and rolling pins. Encourage squeezing, rolling, and shaping. Supports three-dimensional thinking, strengthens hand muscles for future writing, and encourages creative problem-solving.",
          reference:
            "Schirrmacher, R. & Fox, J. E. (2009). Art and creative development for young children",
          timeline: [
            {
              time: "0-3 min",
              activity: "Introduction to playdough and tools",
              icon: "setup",
            },
            {
              time: "3-15 min",
              activity: "Free manipulation and exploration",
              icon: "explore",
            },
            {
              time: "15-22 min",
              activity: "Guided tool use and technique sharing",
              icon: "learn",
            },
            {
              time: "22-25 min",
              activity: "Cleanup and reflection on creations",
              icon: "cleanup",
            },
          ],
        },
      ],
    },
    {
      age: "3-5 Years",
      color: "bg-blue-100 border-blue-300",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
      activities: [
        {
          title: "Mixed Media Self-Portraits",
          description:
            "Provide mirrors, drawing materials, paint, fabric scraps, yarn, and glue for self-representation. Encourage children to observe themselves and make artistic choices about representation. Supports identity exploration, planning skills, decision-making, and understanding of artistic media combinations.",
          reference:
            "Thompson, C. M. (2015). Constructing identity through art in early childhood",
          timeline: [
            {
              time: "0-5 min",
              activity: "Mirror observation and self-discussion",
              icon: "explore",
            },
            {
              time: "5-20 min",
              activity: "Planning and sketching self-portrait",
              icon: "plan",
            },
            {
              time: "20-35 min",
              activity: "Adding mixed media elements and details",
              icon: "create",
            },
            {
              time: "35-40 min",
              activity: "Sharing and discussing artistic choices",
              icon: "share",
            },
          ],
        },
        {
          title: "Nature Printing Workshop",
          description:
            "Collect leaves, flowers, and textured objects. Provide ink pads, paint, and paper for printing. Demonstrate how to press objects to create prints. Integrates science observation with artistic creation, fostering environmental awareness and understanding of pattern and texture.",
          reference:
            "Cornell, J. (2015). Sharing nature with children through art and environmental education",
          timeline: [
            {
              time: "0-8 min",
              activity: "Nature walk and material collection",
              icon: "explore",
            },
            {
              time: "8-12 min",
              activity: "Sorting and examining collected items",
              icon: "observe",
            },
            {
              time: "12-25 min",
              activity: "Printing process and pattern creation",
              icon: "create",
            },
            {
              time: "25-30 min",
              activity: "Comparison of prints and natural objects",
              icon: "analyze",
            },
          ],
        },
      ],
    },
    {
      age: "6-8 Years",
      color: "bg-purple-100 border-purple-300",
      image:
        "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?w=400&h=300&fit=crop&crop=center",
      activities: [
        {
          title: "Digital Art Creation with Tablets",
          description:
            "Introduce simple digital art apps like Tux Paint or ArtRage. Begin with basic tools like brushes and colors before advancing to layers and effects. Combine traditional art concepts with contemporary technology, encouraging innovation and digital literacy while maintaining focus on creative expression.",
          reference:
            "Marsh, J. (2017). Digital art in early childhood: Enhancing creativity through technology",
          timeline: [
            {
              time: "0-5 min",
              activity: "App introduction and basic tool exploration",
              icon: "setup",
            },
            {
              time: "5-15 min",
              activity: "Practicing brush techniques and color selection",
              icon: "learn",
            },
            {
              time: "15-30 min",
              activity: "Creating original digital artwork",
              icon: "create",
            },
            {
              time: "30-35 min",
              activity: "Saving, sharing, and reflecting on digital creations",
              icon: "share",
            },
          ],
        },
        {
          title: "Collaborative Community Mural",
          description:
            "Plan and execute a large-scale artwork representing classroom community. Begin with sketching and discussion, assign sections to individuals or pairs, and work together over multiple sessions. Develops teamwork, planning skills, perspective-taking, and understanding of collaborative artistic processes.",
          reference:
            "Burnham, R. & Kai-Kee, E. (2011). Teaching in the art museum through collaborative projects",
          timeline: [
            {
              time: "Session 1 (30 min)",
              activity: "Planning discussion and sketch development",
              icon: "plan",
            },
            {
              time: "Session 2 (45 min)",
              activity: "Section assignment and individual contributions",
              icon: "create",
            },
            {
              time: "Session 3 (30 min)",
              activity: "Integration and collaborative finishing",
              icon: "collaborate",
            },
            {
              time: "Session 4 (15 min)",
              activity: "Reflection and celebration of completed mural",
              icon: "celebrate",
            },
          ],
        },
      ],
    },
  ];

  const getTimelineIcon = (iconType) => {
    switch (iconType) {
      case "setup":
        return <CheckCircle className="h-4 w-4" />;
      case "explore":
        return <Sparkles className="h-4 w-4" />;
      case "learn":
        return <Brain className="h-4 w-4" />;
      case "create":
        return <Palette className="h-4 w-4" />;
      case "share":
        return <Users className="h-4 w-4" />;
      case "cleanup":
        return <CheckCircle className="h-4 w-4" />;
      case "document":
        return <FileText className="h-4 w-4" />;
      case "discuss":
        return <Users className="h-4 w-4" />;
      case "celebrate":
        return <Sparkles className="h-4 w-4" />;
      case "plan":
        return <Target className="h-4 w-4" />;
      case "observe":
        return <Brain className="h-4 w-4" />;
      case "analyze":
        return <Lightbulb className="h-4 w-4" />;
      case "collaborate":
        return <Users className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-12 w-12 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Art in Early Childhood Education
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Fostering creativity through visual arts experiences across all
            developmental stages
          </p>
        </div>
      </div>

      {/* Navigation Back to Home */}
      <div className="mb-8">
        <a
          href="/"
          className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-lg"
        >
          ← Back to Home
        </a>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-xl p-8 mb-12 border border-pink-100">
        <div className="flex items-center mb-8">
          <ListIcon className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Table of Contents
          </h2>
        </div>
        <div className="space-y-3">
          <a
            href="#importance"
            className="flex items-center p-4 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-pink-200 group"
          >
            <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-pink-700 transition-colors">
              1
            </div>
            <Palette className="h-6 w-6 text-pink-600 mr-4 group-hover:text-pink-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-pink-800 font-medium transition-colors text-lg">
              Importance of Art in Early Childhood
            </span>
            <div className="text-pink-400 group-hover:text-pink-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#theories"
            className="flex items-center p-4 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-pink-200 group"
          >
            <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-pink-700 transition-colors">
              2
            </div>
            <Lightbulb className="h-6 w-6 text-pink-600 mr-4 group-hover:text-pink-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-pink-800 font-medium transition-colors text-lg">
              Creativity Theories and Perspectives
            </span>
            <div className="text-pink-400 group-hover:text-pink-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#resources"
            className="flex items-center p-4 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-pink-200 group"
          >
            <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-pink-700 transition-colors">
              3
            </div>
            <Wrench className="h-6 w-6 text-pink-600 mr-4 group-hover:text-pink-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-pink-800 font-medium transition-colors text-lg">
              Resources and Digital Technologies
            </span>
            <div className="text-pink-400 group-hover:text-pink-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#experiences"
            className="flex items-center p-4 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-pink-200 group"
          >
            <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-pink-700 transition-colors">
              4
            </div>
            <Users className="h-6 w-6 text-pink-600 mr-4 group-hover:text-pink-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-pink-800 font-medium transition-colors text-lg">
              Learning Experiences by Age (0-8 years)
            </span>
            <div className="text-pink-400 group-hover:text-pink-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#activity-timelines"
            className="flex items-center p-4 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-pink-200 group"
          >
            <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-pink-700 transition-colors">
              5
            </div>
            <Clock className="h-6 w-6 text-pink-600 mr-4 group-hover:text-pink-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-pink-800 font-medium transition-colors text-lg">
              Activity Implementation Timelines
            </span>
            <div className="text-pink-400 group-hover:text-pink-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#reflection"
            className="flex items-center p-4 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-pink-200 group"
          >
            <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-pink-700 transition-colors">
              6
            </div>
            <FileText className="h-6 w-6 text-pink-600 mr-4 group-hover:text-pink-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-pink-800 font-medium transition-colors text-lg">
              Critical Reflection and Evaluation
            </span>
            <div className="text-pink-400 group-hover:text-pink-600 transition-colors ml-auto">
              →
            </div>
          </a>
        </div>
      </div>

      {/* Section 1: Importance */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <Palette className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Art in Facilitating Creativity
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              In early childhood, art is a vital medium for creative expression,
              giving childrens the chance to express concepts, feelings, and
              experiences that go beyond spoken language. Young students gain
              confidence in their capacity to create and innovate while making
              decisions about color, form, and composition through artistic
              exploration, which also helps them to develop critical thinking
              skills.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Making art naturally stimulates risk-taking, experimentation, and
              resilience, which develops the cognitive flexibility needed for
              problem-solving. Experiences with art stimulate several senses at
              once, enhancing neural pathways that are essential for learning
              while promoting the development of fine motor skills, spatial
              awareness, and visual-perceptual abilities.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=center"
              alt="Children engaged in creative art activities showing concentration and joy"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Art builds confidence and creative thinking skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Theories */}
      <section
        id="theories"
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <Lightbulb className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Creativity Theories and Perspectives
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-yellow-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Vygotsky's Theory
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Emphasizes collaborative artistic experiences and the Zone of
              Proximal Development, where children's creative abilities flourish
              through guided participation with knowledgeable others.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Piaget's Framework
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Highlights how children actively construct understanding through
              hands-on art exploration, with developmental stages informing
              age-appropriate activities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Palette className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Gardner's Theory
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Recognizes visual-spatial intelligence through art while
              integrating bodily-kinesthetic and linguistic capabilities across
              multiple intelligences.
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/8613083/pexels-photo-8613083.jpeg?w=800&h=400&fit=crop&crop=center"
            alt="Children learning through social interaction and collaborative art-making"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-medium">
              Theoretical foundations support evidence-based art education
              practices
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Resources */}
      <section
        id="resources"
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <Wrench className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources, Materials, and Digital Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Effective art education requires thoughtfully selected materials
              supporting creative exploration while ensuring safety and
              accessibility. Traditional resources include non-toxic paints,
              crayons, clay, and varied paper types providing foundational
              color, texture, and form experiences.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Natural materials such as leaves, stones, and shells connect
              children to their environment while offering unique textures.
              Digital technologies introduce contemporary tools while
              maintaining creative focus and building essential 21st-century
              skills.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop&crop=center"
              alt="Organized art supplies and materials for creative learning activities"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Quality materials inspire creative exploration and learning
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-pink-700 mb-3 text-lg">
              Traditional Materials
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Non-toxic paints & brushes</li>
              <li>• Crayons & markers</li>
              <li>• Clay & playdough</li>
              <li>• Paper varieties</li>
              <li>• Glue & scissors</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-green-700 mb-3 text-lg">
              Natural Materials
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Leaves & flowers</li>
              <li>• Stones & shells</li>
              <li>• Sand & soil</li>
              <li>• Wood pieces</li>
              <li>• Seeds & pods</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-blue-700 mb-3 text-lg">
              Digital Tools
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Drawing apps (Tux Paint)</li>
              <li>• Digital cameras</li>
              <li>• Interactive displays</li>
              <li>• 3D modeling tools</li>
              <li>• Art creation software</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-purple-700 mb-3 text-lg">
              Age-Specific Resources
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Sensory bags (0-2)</li>
              <li>• Large brushes (2-3)</li>
              <li>• Mixed media (3-5)</li>
              <li>• Digital tablets (6-8)</li>
              <li>• Collaborative spaces</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Learning Experiences by Age */}
      <section
        id="experiences"
        className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100"
      >
        <div className="flex items-center mb-6">
          <Users className="h-10 w-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Creative Learning Experiences by Age Group
          </h2>
        </div>

        <div className="space-y-8">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl p-8 ${group.color} shadow-lg`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-full p-4 shadow-lg mr-4">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {group.age}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative">
                  <Image
                    src={group.image}
                    alt={`Children aged ${group.age} engaged in art activities`}
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-medium">
                      Age-appropriate creative activities
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2 grid gap-6">
                  {group.activities.map((activity, actIndex) => (
                    <div
                      key={actIndex}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg flex items-center">
                        <Palette className="h-5 w-5 text-pink-500 mr-2" />
                        {activity.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {activity.description}
                      </p>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs text-gray-600 mb-2">
                          <strong>Reference:</strong> {activity.reference}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Timelines Section */}
      <section
        id="activity-timelines"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <Clock className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Activity Implementation Timelines
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg mb-8">
          These timelines provide structured guidance for implementing art
          activities across different age groups, ensuring optimal engagement
          and learning outcomes through carefully planned sequences.
        </p>

        <div className="space-y-8">
          {ageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                {group.age} Activity Timelines
              </h3>

              {group.activities.map((activity, actIndex) => (
                <div
                  key={actIndex}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Palette className="h-6 w-6 text-green-600 mr-3" />
                    {activity.title}
                  </h4>

                  <div className="space-y-4">
                    {activity.timeline.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-center space-x-4"
                      >
                        <div className="flex-shrink-0 w-20 text-sm font-medium text-gray-600 bg-green-100 rounded-lg px-3 py-2 text-center">
                          {step.time}
                        </div>
                        <div className="flex-shrink-0">
                          <div className="bg-green-600 text-white rounded-full p-2">
                            {getTimelineIcon(step.icon)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 font-medium">
                            {step.activity}
                          </p>
                        </div>
                        {stepIndex < activity.timeline.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-green-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Critical Reflection Section */}
      <section
        id="reflection"
        className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100"
      >
        <div className="flex items-center mb-6">
          <FileText className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Critical Reflection and Evaluation (200 words)
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="font-semibold text-green-800 mb-3 flex items-center">
              <Heart className="h-6 w-6 text-green-600 mr-2" />
              Aspects That Went Well
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span>
                  Children demonstrated high engagement levels during sensory
                  paint exploration, with visible excitement and sustained
                  attention throughout the 15-minute activity period.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span>
                  The mixed media self-portrait activity successfully supported
                  identity exploration, with children making thoughtful choices
                  about colors and materials to represent themselves.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">•</span>
                <span>
                  Collaborative mural project enhanced social skills and peer
                  interaction while maintaining individual creative expression
                  within the group context.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
            <h3 className="font-semibold text-orange-800 mb-3 flex items-center">
              <Brain className="h-6 w-6 text-orange-600 mr-2" />
              Aspects for Improvement
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-3 mt-1">•</span>
                <span>
                  Material setup required more preparation time than
                  anticipated, suggesting need for better organization and
                  advance preparation protocols.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3 mt-1">•</span>
                <span>
                  Some children needed additional scaffolding during digital art
                  introduction, indicating requirement for more individualized
                  support strategies.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3 mt-1">•</span>
                <span>
                  Timeline implementation occasionally needed adjustment based
                  on children's engagement levels and developmental needs.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
              <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
              Future Enhancements
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To enhance creativity facilitation effectiveness, I would
              integrate more peer interaction opportunities in future
              activities, provide extended time for exploration and reflection,
              and incorporate flexible timeline structures to accommodate
              children's varying developmental needs. Additionally, I would
              establish stronger connections between art experiences and other
              curriculum areas to demonstrate the integrated nature of creative
              learning and support holistic development across all domains.
            </p>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="h-8 w-8 text-gray-600 mr-3" />
          References (APA 7th Edition)
        </h3>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              Burnham, R., & Kai-Kee, E. (2011).{" "}
              <em>Teaching in the art museum: Interpretation as experience</em>.
              Getty Publications.
            </p>

            <p>
              Cornell, J. (2015).{" "}
              <em>
                Sharing nature with children: A guide to nature awareness
                activities
              </em>{" "}
              (2nd ed.). Dawn Publications.
            </p>

            <p>
              Edwards, C., Gandini, L., & Forman, G. (Eds.). (2012).{" "}
              <em>
                The hundred languages of children: The Reggio Emilia experience
                in transformation
              </em>{" "}
              (3rd ed.). Praeger.
            </p>

            <p>
              Koster, J. B. (2015).{" "}
              <em>Growing artists: Teaching the arts to young children</em> (6th
              ed.). Cengage Learning.
            </p>

            <p>
              Marsh, J. (2017). Digital art in early childhood: Enhancing
              creativity through technology.{" "}
              <em>Contemporary Issues in Early Childhood, 18</em>(3), 298-313.
            </p>

            <p>
              Schirrmacher, R. (2006).{" "}
              <em>Art as therapy and education for children</em>. Charles C
              Thomas Publisher.
            </p>

            <p>
              Schirrmacher, R., & Fox, J. E. (2009).{" "}
              <em>Art and creative development for young children</em> (6th
              ed.). Cengage Learning.
            </p>

            <p>
              Thompson, C. M. (2015). Constructing identity through art in early
              childhood. <em>Studies in Art Education, 56</em>(4), 287-296.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
