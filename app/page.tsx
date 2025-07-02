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
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const creativityAreas = [
    { icon: Palette, name: "Art", color: "text-pink-500", href: "/art" },
    {
      icon: Drama,
      name: "Drama",
      color: "text-purple-500",
      href: "/drama-puppetry",
    },
    { icon: Users, name: "Movement", color: "text-blue-500", href: "#" },
    { icon: Music, name: "Music", color: "text-green-500", href: "#" },
    {
      icon: FlaskConical,
      name: "Science",
      color: "text-orange-500",
      href: "#",
    },
    { icon: Calculator, name: "Math", color: "text-red-500", href: "#" },
    { icon: BookOpen, name: "Literacy", color: "text-indigo-500", href: "#" },
  ];

  const tableOfContents = [
    { number: "1", title: "Introduction", href: "#introduction", icon: Home },
    {
      number: "2",
      title: "Defining Creativity in Early Childhood Education and Care (ECEC)",
      href: "#defining-creativity",
      icon: Lightbulb,
    },
    {
      number: "3",
      title: "Importance of Creativity for Development",
      href: "#importance-development",
      icon: Brain,
    },
    {
      number: "4",
      title:
        "How to Best Introduce Creativity in Early Childhood Education and Care (ECEC)",
      href: "#introducing-creativity",
      icon: Users,
    },
    {
      number: "5",
      title: "Curriculum Areas Supporting Creativity (Art, Drama, Puppetry)",
      href: "#curriculum-areas",
      icon: Palette,
    },
    {
      number: "6",
      title: "Role of Developmental Theories (Vygotsky, Gardner)",
      href: "#developmental-theories",
      icon: BookOpen,
    },
    {
      number: "7",
      title: "Use of Digital Tools in Creative Expression",
      href: "#digital-tools",
      icon: FlaskConical,
    },
    {
      number: "8",
      title: "Creativity and Wellbeing",
      href: "#creativity-wellbeing",
      icon: Heart,
    },
    {
      number: "9",
      title: "Early Years Learning Framework (EYLF)",
      href: "#eylf",
      icon: Target,
    },
    {
      number: "10",
      title:
        "Australian Children's Education and Care Quality Authority (ACECQA)",
      href: "#acecqa",
      icon: Award,
    },
    { number: "11", title: "Conclusion", href: "#conclusion", icon: FileText },
    {
      number: "12",
      title: "Summary of Key Ideas",
      href: "#summary",
      icon: ListIcon,
    },
    {
      number: "13",
      title: "Purpose of the Website",
      href: "#purpose",
      icon: Sparkles,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Facilitating Creativity in the Curriculum
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Empowering early childhood educators to nurture creative thinking
            and expression across all learning domains
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl p-8 mb-12 border border-purple-100">
        <div className="flex items-center mb-8">
          <ListIcon className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Table of Contents
          </h2>
        </div>
        <div className="space-y-3">
          {tableOfContents.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group">
                <a
                  href={item.href}
                  className="flex items-center p-4 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-purple-200"
                >
                  <div className="flex items-center flex-1">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-purple-700 transition-colors">
                      {item.number}
                    </div>
                    <Icon className="h-6 w-6 text-purple-600 mr-4 group-hover:text-purple-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-purple-800 font-medium transition-colors text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-purple-400 group-hover:text-purple-600 transition-colors">
                    →
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Introduction */}
      <section
        id="introduction"
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <Home className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Introduction</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Welcome to our in-depth examination of early childhood education's
              use of creativity. This website is a useful resource for parents,
              teachers, and childcare providers who are aware of that fostering
              young minds to think creatively, solve problems creatively, and
              express themselves authentically is more important than merely
              doing arts and crafts.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              In today's rapidly changing world, the ability to think creatively
              has never been more important. We'll explore evidence-based
              approaches to fostering creativity across all areas of the
              curriculum, from the first months of life through the early school
              years.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center"
              alt="Children engaged in creative learning activities in a bright classroom"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child is born with creative potential waiting to be
                discovered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Defining Creativity */}
      <section
        id="defining-creativity"
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <Lightbulb className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Defining Creativity in Early Childhood Education and Care (ECEC)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=center"
              alt="Child's hand painting with bright colors, showing creative expression"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Brain className="h-10 w-10 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-3 text-lg">
                Original Thinking
              </h4>
              <p className="text-gray-600">
                Generating new and unique ideas that haven't been thought of
                before, encouraging innovation and fresh perspectives
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-3 text-lg">
                Problem Solving
              </h4>
              <p className="text-gray-600">
                Finding innovative solutions to challenges and everyday
                situations through creative approaches and flexible thinking
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Creativity in early childhood education encompasses the ability to
            generate novel and meaningful ideas, solutions, or expressions. It
            involves divergent thinking, imagination, and the capacity to make
            connections between seemingly unrelated concepts. In ECEC settings,
            creativity manifests through play, exploration, artistic expression,
            and innovative problem-solving across all learning domains,
            supporting children's holistic development and preparing them for
            future challenges.
          </p>
        </div>
      </section>

      {/* Importance for Development */}
      <section
        id="importance-development"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Creativity for Development
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Brain className="h-6 w-6 text-green-600 mr-3" />
                Cognitive Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span>
                    Enhanced problem-solving abilities and flexible thinking
                    patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span>
                    Improved memory and attention span through engaging creative
                    activities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span>
                    Development of executive function skills and advanced
                    planning abilities
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-red-600 mr-3" />
                Social-Emotional Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs font-bold">✓</span>
                  </div>
                  <span>
                    Increased self-confidence and sense of personal
                    accomplishment
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs font-bold">✓</span>
                  </div>
                  <span>
                    Better emotional regulation through various forms of
                    creative expression
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                    <span className="text-red-600 text-xs font-bold">✓</span>
                  </div>
                  <span>
                    Enhanced empathy and understanding of diverse perspectives
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 relative">
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop&crop=center"
              alt="Children collaborating on a creative project, showing brain development through hands-on learning"
              width={800}
              height={600}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Brain Development</h4>
              <p className="text-sm leading-relaxed">
                Creative activities stimulate multiple areas of the brain
                simultaneously, promoting neural connections essential for
                learning and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Introduce Creativity */}
      <section
        id="introducing-creativity"
        className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100"
      >
        <div className="flex items-center mb-6">
          <Users className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            How to Best Introduce Creativity in Early Childhood Education and
            Care (ECEC)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?w=600&h=400&fit=crop&crop=center"
              alt="Early childhood classroom environment designed for creative exploration with open spaces and materials"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                "The environment is the third teacher" - Reggio Emilia
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Home className="h-6 w-6 text-purple-600 mr-3" />
                Environment Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Creating spaces that invite exploration and discovery is
                fundamental to fostering creativity. This includes providing
                open-ended materials, comfortable spaces for reflection, and
                areas where children can safely take risks and experiment with
                new ideas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
              <h4 className="font-bold text-purple-800 mb-4 text-lg">
                Key Implementation Strategies
              </h4>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    Provide unstructured time for free play and open exploration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>Offer diverse, open-ended materials and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    Ask "What if..." and "How might we..." questions regularly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    Document and reflect on creative processes with children
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section
        id="curriculum-areas"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <Palette className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Curriculum Areas Supporting Creativity (Art, Drama, Puppetry)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
            <div className="relative mb-4">
              <Image
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop&crop=center"
                alt="Children painting and creating art with vibrant colors"
                width={400}
                height={250}
                className="rounded-xl object-cover w-full"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                <Palette className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Art</h3>
            <p className="text-gray-600 leading-relaxed">
              Visual expression through various media, techniques, and creative
              exploration of colors, forms, and textures
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
            <div className="relative mb-4">
              <Image
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop&crop=center"
                alt="Children engaged in dramatic play and storytelling activities"
                width={400}
                height={250}
                className="rounded-xl object-cover w-full"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                <Drama className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Drama</h3>
            <p className="text-gray-600 leading-relaxed">
              Storytelling and character exploration through performance,
              role-play, and imaginative scenarios
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
            <div className="relative mb-4">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center"
                alt="Children playing and moving together in a group activity"
                width={400}
                height={250}
                className="rounded-xl object-cover w-full"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Movement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Physical expression, spatial awareness, and creative movement that
              integrates body and mind
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Integration Across Learning Areas
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            While art, drama, and puppetry are powerful creative mediums,
            creativity extends across all curriculum areas. Mathematical
            thinking becomes creative through pattern exploration and innovative
            problem-solving, scientific inquiry involves creative hypothesis
            formation and experimental design, and language development
            flourishes through imaginative storytelling, poetry, and creative
            wordplay that engages children's natural linguistic creativity.
          </p>
        </div>
      </section>

      {/* Developmental Theories */}
      <section
        id="developmental-theories"
        className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100"
      >
        <div className="flex items-center mb-6">
          <BookOpen className="h-10 w-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Role of Developmental Theories (Vygotsky, Gardner)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/8613083/pexels-photo-8613083.jpeg?w=500&h=600&fit=crop&crop=center"
              alt="Children learning together through social interaction and collaboration"
              width={500}
              height={600}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-semibold mb-1">Social Learning</h4>
              <p className="text-sm">
                Children develop creativity through meaningful interaction and
                collaboration
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mr-4 shadow-lg">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Vygotsky's Theory
              </h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <div>
                  <strong>Zone of Proximal Development:</strong> Children
                  achieve higher creative thinking with appropriate guidance
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <div>
                  <strong>Social Interaction:</strong> Creativity develops
                  through meaningful collaboration
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <div>
                  <strong>Play as Learning:</strong> Imaginative play leads
                  creative development
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mr-4 shadow-lg">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Gardner's Multiple Intelligences
              </h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Visual-Spatial:</strong> Art, design, and spatial
                  reasoning
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Musical:</strong> Rhythm, melody, and sound
                  exploration
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Bodily-Kinesthetic:</strong> Physical movement and
                  hands-on learning
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Digital Tools */}
      <section
        id="digital-tools"
        className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg p-8 mb-8 border border-orange-100"
      >
        <div className="flex items-center mb-6">
          <FlaskConical className="h-10 w-10 text-orange-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Use of Digital Tools in Creative Expression
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?w=600&h=400&fit=crop&crop=center"
              alt="Children using tablets and digital devices for creative learning and expression"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Digital tools expand creative possibilities when used
                thoughtfully
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Tablet className="h-10 w-10 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Digital Art Apps
              </h4>
              <p className="text-sm text-gray-600">
                Creative drawing and painting applications
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Music className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Music Creation
              </h4>
              <p className="text-sm text-gray-600">
                Sound exploration and composition tools
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Camera className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Digital Storytelling
              </h4>
              <p className="text-sm text-gray-600">
                Video and multimedia storytelling platforms
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Smartphone className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">
                Animation Tools
              </h4>
              <p className="text-sm text-gray-600">
                Simple animation and movement creation
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Digital technologies, when used thoughtfully and appropriately, can
            significantly enhance creative expression by providing new mediums
            and innovative tools for children to explore. Age-appropriate
            applications, recording devices, and interactive platforms can
            extend traditional creative activities while simultaneously
            developing essential digital literacy skills that are crucial for
            future learning and success in our increasingly connected world.
          </p>
        </div>
      </section>

      {/* Creativity and Wellbeing */}
      <section
        id="creativity-wellbeing"
        className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-lg p-8 mb-8 border border-red-100"
      >
        <div className="flex items-center mb-6">
          <Heart className="h-10 w-10 text-red-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Creativity and Wellbeing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/5303779/pexels-photo-5303779.jpeg"
                alt="Happy children expressing emotions through creative activities and art therapy"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">
                  Creative expression supports emotional health and resilience
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-red-600 mr-3" />
                Emotional Benefits
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Creative activities provide safe and meaningful outlets for
                emotional expression, helping children process complex
                experiences, develop rich emotional vocabulary, and build
                resilience. Through art, music, and dramatic play, children
                learn to communicate feelings they may not yet have words for.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8">
            <div className="text-center mb-6">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">
                Holistic Development
              </h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <strong className="text-gray-800">Self-Esteem:</strong>
                <span className="text-gray-600">
                  {" "}
                  Success in creative endeavors builds confidence and positive
                  self-image
                </span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <strong className="text-gray-800">Social Connection:</strong>
                <span className="text-gray-600">
                  {" "}
                  Collaborative creativity strengthens relationships and
                  communication
                </span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <strong className="text-gray-800">Identity Formation:</strong>
                <span className="text-gray-600">
                  {" "}
                  Creative expression supports healthy sense of self and
                  personal identity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EYLF */}
      <section
        id="eylf"
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <Target className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Early Years Learning Framework (EYLF)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/8088087/pexels-photo-8088087.jpeg"
              alt="Australian early childhood education setting showing EYLF principles in action"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                EYLF supports play-based learning and creative development
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              EYLF Learning Outcomes Supporting Creativity
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 text-lg">
                  Outcome 1: Identity
                </h4>
                <p className="text-gray-700">
                  Children feel safe, secure, and supported while developing
                  their sense of agency through creative choices.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-blue-700 mb-3 text-lg">
                  Outcome 4: Learning
                </h4>
                <p className="text-gray-700">
                  Children develop dispositions such as curiosity, creativity,
                  commitment, enthusiasm, and imagination.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            The EYLF recognizes that creativity is fundamental to children's
            learning and development. It emphasizes the importance of play-based
            learning, where children's natural creativity can flourish through
            exploration, experimentation, and meaningful interactions with
            educators, peers, and their environment (Department of Education,
            Employment and Workplace Relations, 2009).
          </p>
        </div>
      </section>

      {/* ACECQA */}
      <section
        id="acecqa"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <Award className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Australian Children's Education and Care Quality Authority (ACECQA)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              Quality Area 1: Educational Program
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>
                  ACECQA ensures programs based on approved learning frameworks
                  support creativity
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>
                  Promotes play-based learning approaches that enhance creative
                  development
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>
                  Advocates for intentional teaching strategies that support
                  creative thinking
                </span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center"
              alt="Quality early childhood education environment supporting ACECQA standards"
              width={400}
              height={500}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl"></div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-green-800 mb-6">
              Quality Area 3: Physical Environment
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>
                  ACECQA guidelines ensure spaces are thoughtfully designed for
                  creative exploration
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Resources that inspire innovation and imagination</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Equipment that actively invites creative engagement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            ACECQA oversees the National Quality Standard (NQS) and supports
            creativity through quality educational programs that provide
            children with meaningful opportunities for exploration,
            investigation, and creative expression. The authority emphasizes the
            critical importance of environments and practices that nurture
            children's natural curiosity and imagination while maintaining high
            standards of safety and educational excellence (Australian
            Children's Education and Care Quality Authority, 2020).
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section
        id="conclusion"
        className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100"
      >
        <div className="flex items-center mb-6">
          <FileText className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Conclusion</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed text-xl">
              Promoting creativity in early childhood education is a vital
              investment in the futures of children and the well-being of
              society, not just an instructional tactic. Understanding the
              theories that underpin creative development, putting
              evidence-based practices into practice, and fostering environments
              that promote expression and exploration can all help kids acquire
              the critical thinking abilities they need to prosper in a world
              that is constantly changing.
            </p>
          </div>

          <div className="relative">
            <Image
              src="https://media.istockphoto.com/id/1481647581/photo/happy-senior-grandfather-talking-and-having-fun-with-his-grandchildren-holding-them-on-lap-at.jpg?s=2048x2048&w=is&k=20&c=0SNYh8UU-10WQNZSNnzQ9Ik9lTv8QF-r71hgv0FUGlc="
              alt="Children celebrating their creative achievements and future possibilities"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Investing in creativity today builds tomorrow's innovators
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            The integration of creativity across all learning areas, supported
            by comprehensive frameworks like the EYLF and quality standards like
            the NQS, ensures that we provide holistic, developmentally
            appropriate experiences that honor each child's unique creative
            potential while maintaining the highest standards of educational
            excellence and professional practice.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section
        id="summary"
        className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100"
      >
        <div className="flex items-center mb-6">
          <ListIcon className="h-10 w-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Summary of Key Ideas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-indigo-800 mb-3 text-lg">
                💡 Creativity is Essential
              </h4>
              <p className="text-gray-700">
                Creativity supports cognitive, social, emotional, and physical
                development across all domains of learning and life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-purple-800 mb-3 text-lg">
                🎨 Multiple Expression Forms
              </h4>
              <p className="text-gray-700">
                Art, drama, music, movement, and digital tools provide diverse
                creative outlets for all children.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&crop=center"
              alt="Summary visualization of creative learning and development"
              width={400}
              height={500}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-semibold mb-1">Key Ideas</h4>
              <p className="text-sm">
                Essential concepts for creative curriculum implementation
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-green-800 mb-3 text-lg">
                ❤️ Wellbeing Connection
              </h4>
              <p className="text-gray-700">
                Creative expression supports mental health, emotional
                regulation, and positive self-esteem development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-yellow-800 mb-3 text-lg">
                🚀 Future Ready
              </h4>
              <p className="text-gray-700">
                Creative thinking skills prepare children for future challenges
                and opportunities in an innovative world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section
        id="purpose"
        className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg p-8 mb-8 border border-purple-200"
      >
        <div className="flex items-center mb-6">
          <Sparkles className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Purpose of the Website
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/8488972/pexels-photo-8488972.jpeg"
              alt="Educational website mission - supporting early childhood educators and families"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Supporting educators, families, and childcare professionals
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              To provide educators, families, and childcare professionals with
              practical, evidence-based resources for nurturing creativity in
              children from birth to eight years, supporting holistic
              development and lifelong learning.
            </p>

            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6">
                <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-gray-800 mb-2">Educate</h4>
                <p className="text-gray-600">
                  Sharing research-based information about creativity in early
                  childhood education and development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation to Main Pages */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <Palette className="h-10 w-10 text-pink-500 mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">
              Explore Art Activities
            </h3>
          </div>
          <div className="relative mb-6">
            <Image
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=200&fit=crop&crop=center"
              alt="Children engaged in art activities"
              width={500}
              height={200}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Discover age-appropriate art experiences and creative theories that
            support artistic development across all developmental stages.
          </p>
          <a
            href="/art"
            className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors"
          >
            Learn More →
          </a>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <Drama className="h-10 w-10 text-purple-500 mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">
              Drama & Puppetry
            </h3>
          </div>
          <div className="relative mb-6">
            <Image
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=200&fit=crop&crop=center"
              alt="Children engaged in drama and puppetry"
              width={500}
              height={200}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Explore dramatic play activities and puppetry experiences that
            enhance imaginative thinking and creative expression.
          </p>
          <a
            href="/drama-puppetry"
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* References */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mt-12 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="h-8 w-8 text-gray-600 mr-3" />
          References
        </h3>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Australian Children's Education and Care Quality Authority.
              (2020). <em>National Quality Standard</em>. ACECQA.
              <a
                href="https://www.acecqa.gov.au/nqs"
                className="text-blue-600 hover:text-blue-800 ml-2"
              >
                https://www.acecqa.gov.au/nqs
              </a>
            </p>
            <p>
              Department of Education, Employment and Workplace Relations.
              (2009).{" "}
              <em>
                Belonging, being and becoming: The Early Years Learning
                Framework for Australia
              </em>
              . Commonwealth of Australia.
              <a
                href="https://www.acecqa.gov.au/sites/default/files/2018-02/belonging_being_and_becoming_the_early_years_learning_framework_for_australia.pdf"
                className="text-blue-600 hover:text-blue-800 ml-2"
              >
                EYLF Document
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
