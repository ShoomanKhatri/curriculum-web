import Image from "next/image";
import {
  FlaskConical,
  Brain,
  Users,
  Clock,
  FileText,
  Home,
  BookOpen,
  List as ListIcon,
  Lightbulb,
  Sparkles,
  Palette,
  Wrench,
  Award,
  Target,
} from "lucide-react";

export default function TechnologiesPage() {
  // Age groups with timeline activities for technologies
  const ageGroups = [
    {
      age: "0-12 months",
      timeline: [
        "Exploring cause and effect with light-up or sound toys",
        "Observing adults use simple technology (remotes, phones)",
        "Tummy time with interactive play mats",
        "Responding to music from digital devices",
        "Manipulating buttons and switches on toys",
      ],
    },
    {
      age: "1-2 years",
      timeline: [
        "Using simple digital toys (push-button music, lights)",
        "Exploring touch screens with adult guidance",
        "Taking photos with a child-safe camera",
        "Listening to stories on audio devices",
        "Building with blocks that make sounds or light up",
      ],
    },
    {
      age: "2-3 years",
      timeline: [
        "Drawing on tablets with stylus or finger",
        "Exploring programmable toys (Bee-Bot, Code-a-pillar)",
        "Recording and playing back their own voice",
        "Sorting and matching games on digital devices",
        "Using simple apps for music or art creation",
      ],
    },
    {
      age: "3-4 years",
      timeline: [
        "Creating digital art with apps",
        "Participating in video calls with family",
        "Exploring basic coding games",
        "Using digital microscopes or magnifiers",
        "Documenting projects with photos or video",
      ],
    },
    {
      age: "4-5 years",
      timeline: [
        "Building and programming simple robots",
        "Making stop-motion videos with adult help",
        "Exploring educational websites and games",
        "Collaborating on digital storytelling",
        "Learning about internet safety basics",
      ],
    },
  ];

  const getTimelineIcon = (index: number) => {
    const icons = [
      FlaskConical,
      BookOpen,
      Sparkles,
      Lightbulb,
      Palette,
      Wrench,
    ];
    return icons[index % icons.length];
  };

  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Technologies",
      href: "#introduction",
      icon: FlaskConical,
    },
    {
      number: "2",
      title: "Importance of Technologies",
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
      <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <FlaskConical className="h-12 w-12 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Technologies in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Empowering children to explore, create, and problem-solve with
            digital and physical technologies
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
          <FlaskConical className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg text-justify">
              Technologies in early childhood education encompass both digital
              and physical tools that help children explore, create, and solve
              problems. From simple cause-and-effect toys to programmable robots
              and creative apps, technology can inspire curiosity and innovation
              when used thoughtfully and intentionally.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              By integrating technology into play and learning, educators can
              support children's development of digital literacy, critical
              thinking, and collaborative skills preparing them for a rapidly
              changing world.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://image.cnbcfm.com/api/v1/image/107214099-1679584519371-gettyimages-614860106-000106526123_Unapproved.jpeg?v=1698100681&w=1480&h=833&ffmt=webp&vtcrop=y"
              alt="Children exploring technology with tablets and programmable toys in a classroom"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Technology is a tool for creativity and discovery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Technologies */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <FlaskConical className="h-10 w-10 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Digital Literacy
            </h4>
            <p className="text-gray-600">
              Early experiences with technology build foundational skills for
              safe, creative, and effective use of digital tools
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Collaboration & Communication
            </h4>
            <p className="text-gray-600">
              Technology supports new ways for children to share ideas, work
              together, and connect with others
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Brain className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Creativity & Problem-Solving
            </h4>
            <p className="text-gray-600">
              Digital and physical technologies encourage children to invent,
              experiment, and solve problems in new ways
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Research shows that children who engage with technology in
            developmentally appropriate ways demonstrate stronger
            problem-solving skills, creativity, and adaptability. These
            experiences prepare them for future learning and responsible
            participation in a digital world.
          </p>
        </div>
      </section>

      {/* Theoretical Foundation */}
      <section
        id="theories"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <BookOpen className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Theoretical Foundation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-pink-800 mb-6">
              Constructionism (Papert)
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-3">•</span>
                <div>
                  <strong>Learning by Making:</strong> Children construct
                  knowledge best through hands-on building and digital creation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-3">•</span>
                <div>
                  <strong>Iterative Design:</strong> Emphasizes testing,
                  revising, and improving digital and physical projects
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-3">•</span>
                <div>
                  <strong>Collaboration:</strong> Learning is enhanced through
                  shared digital and hands-on projects
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Digital Play Theory
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Playful Exploration:</strong> Technology is most
                  powerful when integrated into playful, child-led learning
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Agency:</strong> Children make choices and direct
                  their own learning with digital tools
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Balance:</strong> Digital experiences are balanced
                  with hands-on, social, and outdoor play
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://onlinedegrees.sandiego.edu/wp-content/uploads/2019/12/educational-technology.jpg"
            alt="Children collaborating with tablets, robots, and digital tools in a creative classroom"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">Learning by Doing</h4>
            <p className="text-sm leading-relaxed">
              Technology experiences are most powerful when children are active
              participants in the creative process.
            </p>
          </div>
        </div>
      </section>

      {/* Resources and Environment */}
      <section
        id="resources"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <Wrench className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources and Environment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=center"
              alt="Technology-rich classroom with tablets, robots, and creative digital tools"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Inspiring spaces encourage digital creativity and exploration
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FlaskConical className="h-6 w-6 text-green-600 mr-3" />
                Digital Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">Tablets & Apps:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Drawing and art apps</li>
                    <li>• Coding games</li>
                    <li>• Storytelling platforms</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">Programmable Toys:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Bee-Bot, Code-a-pillar</li>
                    <li>• Simple robots</li>
                    <li>• Digital cameras</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Wrench className="h-6 w-6 text-yellow-600 mr-3" />
                Physical Technology
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Building sets with gears and pulleys</li>
                <li>• Simple machines and ramps</li>
                <li>• Light tables and magnifiers</li>
                <li>• Audio recorders and speakers</li>
                <li>• Interactive whiteboards</li>
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
                <span className="text-indigo-600 mr-2">💡</span>
                <span>Exploring light-up and sound toys</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">💡</span>
                <span>Listening to music from digital devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">💡</span>
                <span>Observing adults use technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">💡</span>
                <span>Manipulating buttons and switches</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💡</span>
                <span>Drawing and creating on tablets</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💡</span>
                <span>Exploring programmable toys</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💡</span>
                <span>Recording and playing back sounds</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💡</span>
                <span>Collaborative digital storytelling</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              School Age
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">💡</span>
                <span>Building and programming robots</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">💡</span>
                <span>Making stop-motion videos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">💡</span>
                <span>Exploring educational websites</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">💡</span>
                <span>Learning about internet safety</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developmental Timelines */}
      <section
        id="timelines"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-8">
          <Clock className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Developmental Timelines
          </h2>
        </div>

        <div className="space-y-8">
          {ageGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100"
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-6">
                {group.age}
              </h3>
              <div className="grid gap-4">
                {group.timeline.map((activity, index) => {
                  const IconComponent = getTimelineIcon(index);
                  return (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="bg-pink-600 rounded-full p-3 mr-4 flex-shrink-0">
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
                How can we ensure that technology experiences are accessible and
                meaningful for children with diverse abilities, backgrounds, and
                learning styles? Consider adaptations and multiple ways for
                children to participate and express themselves.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Wrench className="h-6 w-6 text-yellow-600 mr-3" />
                Assessment and Documentation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What meaningful ways can we document children's growth in
                technology use and digital creativity? How do we capture the
                learning, problem-solving, and innovation that occurs in these
                experiences while respecting each child's unique journey?
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=center"
              alt="Children using tablets and digital tools for creative learning and documentation"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child deserves to explore and create with technology
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            As educators, we must continuously reflect on our practices to
            ensure that technology experiences truly serve all children. This
            includes considering how we can honor diverse backgrounds, support
            children with varying abilities, and create environments where every
            child feels confident to explore, create, and problem-solve with
            technology.
          </p>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Home className="h-6 w-6 text-blue-500 mr-3" />
            Explore Science Activities
          </h3>
          <p className="text-gray-600 mb-4">
            Discover hands-on science experiences that complement technology
            learning
          </p>
          <a
            href="/science"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Learn More →
          </a>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Palette className="h-6 w-6 text-green-500 mr-3" />
            Art & Creativity
          </h3>
          <p className="text-gray-600 mb-4">
            Explore creative art experiences that inspire technology exploration
          </p>
          <a
            href="/art"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
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
              Papert, S. (1980).{" "}
              <em>Mindstorms: Children, computers, and powerful ideas</em>.
              Basic Books.
            </p>
            <p>
              Marsh, J. (2017). <em>Digital play in the early years</em>. SAGE
              Publications.
            </p>
            <p>
              Australian Children's Education and Care Quality Authority.
              (2020). <em>National Quality Standard</em>. ACECQA.
            </p>
            <p>
              NAEYC & Fred Rogers Center. (2012).{" "}
              <em>
                Technology and interactive media as tools in early childhood
                programs serving children from birth through age 8
              </em>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
