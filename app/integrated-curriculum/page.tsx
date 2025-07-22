import Image from "next/image";
import {
  Sparkles,
  Brain,
  Users,
  Clock,
  FileText,
  Home,
  BookOpen,
  List as ListIcon,
  Lightbulb,
  Palette,
  FlaskConical,
  Calculator,
  Award,
  Target,
  Drama,
  Music,
  Wrench,
} from "lucide-react";

export default function IntegratedCurriculumPage() {
  // Timeline for integrated curriculum
  const ageGroups = [
    {
      age: "0-12 months",
      timeline: [
        "Exploring sensory materials (STEM: Science & Engineering)",
        "Listening to music and stories (STEAM: Arts & Literacy)",
        "Noticing patterns in routines (Math & Science)",
        "Responding to colors, sounds, and textures (STEAMIE)",
      ],
    },
    {
      age: "1-2 years",
      timeline: [
        "Building with blocks and loose parts (Engineering & Math)",
        "Dancing and moving to music (Arts & Movement)",
        "Simple cause-and-effect experiments (Science)",
        "Exploring nature and outdoor play (STREAM: Environment)",
      ],
    },
    {
      age: "2-3 years",
      timeline: [
        "Creating art with natural materials (STEAM)",
        "Counting and sorting objects (Math)",
        "Storytelling with puppets (Literacy & Drama)",
        "Simple coding toys and puzzles (Technology & Engineering)",
      ],
    },
    {
      age: "3-4 years",
      timeline: [
        "Designing and testing ramps (Engineering & Science)",
        "Singing songs about the weather (Science & Arts)",
        "Group mural projects (STEAMIE: Arts, Environment, Inclusion)",
        "Exploring maps and community (STREAM: Social Sciences)",
      ],
    },
    {
      age: "4-5 years",
      timeline: [
        "Planning and building structures (STEM)",
        "Coding simple robots (Technology)",
        "Researching animals and habitats (Science & Social Sciences)",
        "Integrating art, music, and movement in performances (STEAMIE)",
      ],
    },
  ];

  const getTimelineIcon = (index: number) => {
    const icons = [
      Sparkles,
      FlaskConical,
      Palette,
      Calculator,
      Drama,
      Music,
      Wrench,
      BookOpen,
    ];
    return icons[index % icons.length];
  };

  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Integrated Curriculum",
      href: "#introduction",
      icon: Sparkles,
    },
    {
      number: "2",
      title: "Importance of Integration (STEM, STEAM, STREAM, STEAMIE)",
      href: "#importance",
      icon: Brain,
    },
    {
      number: "3",
      title: "Theoretical Foundation",
      href: "#theories",
      icon: BookOpen,
    },
    {
      number: "4",
      title: "Resources and Environment",
      href: "#resources",
      icon: Wrench,
    },
    {
      number: "5",
      title: "Age-Appropriate Activities",
      href: "#activities",
      icon: Users,
    },
    {
      number: "6",
      title: "Developmental Timelines",
      href: "#timelines",
      icon: Clock,
    },
    {
      number: "7",
      title: "Critical Reflection",
      href: "#reflection",
      icon: FileText,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Integrated Curriculum: STEM, STEAM, STREAM & STEAMIE
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Connecting learning domains for holistic, creative, and future-ready
            education
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 mb-12 border border-blue-100">
        <div className="flex items-center mb-8">
          <ListIcon className="h-10 w-10 text-blue-600 mr-4" />
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
                  className="flex items-center p-4 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-blue-200"
                >
                  <div className="flex items-center flex-1">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-blue-700 transition-colors">
                      {item.number}
                    </div>
                    <Icon className="h-6 w-6 text-blue-600 mr-4 group-hover:text-blue-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-blue-800 font-medium transition-colors text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-blue-400 group-hover:text-blue-600 transition-colors">
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
          <Sparkles className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Integrated Curriculum
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Integrated curriculum brings together multiple learning
              domains—science, technology, engineering, arts, mathematics,
              environment, inclusion, and more—into meaningful, connected
              experiences. Approaches like STEM, STEAM, STREAM, and STEAMIE
              foster creativity, critical thinking, and real-world
              problem-solving by breaking down traditional subject silos.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              By connecting concepts and skills across domains, children develop
              a deeper understanding of the world, see the relevance of their
              learning, and build the flexible thinking needed for the future.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=600&h=400&fit=crop&crop=center"
              alt="Children collaborating on integrated STEM and arts projects with hands-on materials"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child is a creative problem-solver in the making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Integration */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Integration (STEM, STEAM, STREAM, STEAMIE)
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <FlaskConical className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Real-World Relevance
            </h4>
            <p className="text-gray-600">
              Integrated learning mirrors how knowledge is used in real life,
              making learning meaningful and engaging
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Palette className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Creativity & Innovation
            </h4>
            <p className="text-gray-600">
              Crossing domains sparks new ideas, creative solutions, and
              innovative thinking
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Calculator className="h-10 w-10 text-yellow-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Future-Ready Skills
            </h4>
            <p className="text-gray-600">
              Integrated approaches build collaboration, communication, and
              adaptability for a changing world
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Research shows that integrated curriculum approaches increase
            engagement, deepen understanding, and prepare children for the
            complex challenges of the future. By connecting learning, we empower
            children to see themselves as capable, creative, and resourceful
            learners.
          </p>
        </div>
      </section>

      {/* Theoretical Foundation */}
      <section
        id="theories"
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <BookOpen className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Theoretical Foundation
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-6">
              Constructivism (Piaget, Papert)
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Active Learning:</strong> Children build knowledge by
                  doing, experimenting, and connecting ideas
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Integration:</strong> Learning is most powerful when
                  concepts are connected across domains
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Reflection:</strong> Children make sense of learning
                  through discussion and documentation
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Transdisciplinary Approaches
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Big Ideas:</strong> Learning is organized around broad
                  concepts that cross subject boundaries
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Collaboration:</strong> Children and educators
                  co-construct knowledge through shared inquiry
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Real-World Connections:</strong> Projects and
                  investigations are linked to children's lives and interests
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop&crop=center"
            alt="Children collaborating on integrated STEM, arts, and environment projects"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">
              Learning by Connecting
            </h4>
            <p className="text-sm leading-relaxed">
              Integrated curriculum is most powerful when children make
              connections across domains and with the world around them.
            </p>
          </div>
        </div>
      </section>

      {/* Resources and Environment */}
      <section
        id="resources"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <Wrench className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources and Environment
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
              alt="Classroom with STEM, art, and nature materials for integrated learning"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Inspiring spaces encourage creative, integrated learning
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Wrench className="h-6 w-6 text-pink-600 mr-3" />
                Materials for Integration
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">STEM & STEAM:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Blocks, gears, and building sets</li>
                    <li>• Art supplies and musical instruments</li>
                    <li>• Science kits and nature materials</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">STREAM & STEAMIE:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Maps, globes, and community resources</li>
                    <li>• Technology tools and coding toys</li>
                    <li>• Inclusive materials for all learners</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="h-6 w-6 text-yellow-600 mr-3" />
                Visual Supports
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Project boards and documentation panels</li>
                <li>• Visual schedules and concept maps</li>
                <li>• Digital portfolios and apps</li>
                <li>• Books and story props</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Activities */}
      <section
        id="activities"
        className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100"
      >
        <div className="flex items-center mb-6">
          <Users className="h-10 w-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Age-Appropriate Activities
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Infants & Toddlers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✨</span>
                <span>Exploring sensory materials and music</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✨</span>
                <span>Stacking, sorting, and building with blocks</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✨</span>
                <span>Listening to stories and songs</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✨</span>
                <span>Simple cause-and-effect play</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span>Group art and science projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span>Building and testing structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span>Exploring nature and the environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✨</span>
                <span>Simple coding and technology play</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              School Age
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✨</span>
                <span>Project-based investigations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✨</span>
                <span>Researching and presenting findings</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✨</span>
                <span>Integrating arts, science, and technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✨</span>
                <span>Community and environmental projects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developmental Timelines */}
      <section
        id="timelines"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-8">
          <Clock className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Developmental Timelines
          </h2>
        </div>
        <div className="space-y-8">
          {ageGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white rounded-2xl p-8 shadow-lg border border-green-100"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                {group.age}
              </h3>
              <div className="grid gap-4">
                {group.timeline.map((activity, index) => {
                  const IconComponent = getTimelineIcon(index);
                  return (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="bg-green-600 rounded-full p-3 mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {activity}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Reflection */}
      <section
        id="reflection"
        className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg p-8 mb-8 border border-orange-100"
      >
        <div className="flex items-center mb-6">
          <FileText className="h-10 w-10 text-orange-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Critical Reflection
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-orange-600 mr-3" />
                Inclusive Practices
              </h3>
              <p className="text-gray-700 leading-relaxed">
                How can we ensure that integrated curriculum activities are
                accessible and meaningful for children with diverse abilities,
                backgrounds, and learning styles? Consider adaptations and
                multiple ways for children to participate and express their
                ideas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="h-6 w-6 text-yellow-600 mr-3" />
                Assessment and Documentation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What meaningful ways can we document children's growth in
                integrated thinking? How do we capture the creativity,
                problem-solving, and learning that occurs in these experiences
                while respecting each child's unique journey?
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop&crop=center"
              alt="Children working together on integrated projects, exploring STEM, arts, and environment"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child deserves to experience the joy of integrated
                learning
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            As educators, we must continuously reflect on our practices to
            ensure that integrated curriculum experiences truly serve all
            children. This includes considering how we can honor diverse
            backgrounds, support children with varying abilities, and create
            environments where every child feels confident to connect ideas and
            solve problems.
          </p>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Home className="h-6 w-6 text-green-500 mr-3" />
            Explore Science Activities
          </h3>
          <p className="text-gray-600 mb-4">
            Discover hands-on science experiences that complement integrated
            learning
          </p>
          <a
            href="/science"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
          >
            Learn More →
          </a>
        </div>
        <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Palette className="h-6 w-6 text-yellow-500 mr-3" />
            Art & Creativity
          </h3>
          <p className="text-gray-600 mb-4">
            Explore creative art experiences that inspire integrated thinking
          </p>
          <a
            href="/art"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* References */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="h-8 w-8 text-gray-600 mr-3" />
          References
        </h3>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Beane, J. A. (1997).{" "}
              <em>
                Curriculum integration: Designing the core of democratic
                education
              </em>
              . Teachers College Press.
            </p>
            <p>
              Drake, S. M., & Reid, J. L. (2020).{" "}
              <em>
                Integrated curriculum as an effective way to teach 21st century
                capabilities
              </em>
              . Asia Pacific Journal of Educational Research.
            </p>
            <p>
              Papert, S. (1980).{" "}
              <em>Mindstorms: Children, computers, and powerful ideas</em>.
              Basic Books.
            </p>
            <p>
              Australian Children's Education and Care Quality Authority.
              (2020). <em>National Quality Standard</em>. ACECQA.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
