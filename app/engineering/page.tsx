import Image from "next/image";
import {
  Wrench,
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
  FlaskConical,
  Award,
  Target,
} from "lucide-react";

export default function EngineeringPage() {
  // Age groups with timeline activities for engineering
  const ageGroups = [
    {
      age: "0-12 months",
      timeline: [
        "Exploring cause and effect with simple toys",
        "Stacking and knocking down soft blocks",
        "Grasping and manipulating objects",
        "Observing adults build and fix things",
        "Tummy time with textured objects",
      ],
    },
    {
      age: "1-2 years",
      timeline: [
        "Building towers with blocks",
        "Fitting shapes into shape sorters",
        "Rolling balls down ramps",
        "Exploring water and sand with containers",
        "Simple puzzles and pegboards",
      ],
    },
    {
      age: "2-3 years",
      timeline: [
        "Constructing bridges and tunnels with blocks",
        "Experimenting with stacking and balancing",
        "Using tools like spoons and scoops",
        "Creating simple machines with everyday items",
        "Exploring gears and wheels",
      ],
    },
    {
      age: "3-4 years",
      timeline: [
        "Designing and building with a variety of materials",
        "Problem-solving with construction sets",
        "Exploring how things work (hinges, levers)",
        "Collaborative building projects",
        "Testing structures for strength and stability",
      ],
    },
    {
      age: "4-5 years",
      timeline: [
        "Planning and drawing simple designs",
        "Building complex structures with blocks and connectors",
        "Exploring simple robotics and coding toys",
        "Inventing new uses for recycled materials",
        "Participating in group engineering challenges",
      ],
    },
  ];

  const getTimelineIcon = (index: number) => {
    const icons = [Wrench, Brain, Users, Lightbulb, Palette, FlaskConical];
    return icons[index % icons.length];
  };

  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Engineering",
      href: "#introduction",
      icon: Wrench,
    },
    {
      number: "2",
      title: "Importance of Engineering",
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
      icon: Palette,
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
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Wrench className="h-12 w-12 mr-4 animate-spin-slow" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Engineering in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Inspiring young problem-solvers and builders through hands-on
            exploration and creative challenges
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-xl p-8 mb-12 border border-yellow-100">
        <div className="flex items-center mb-8">
          <ListIcon className="h-10 w-10 text-yellow-600 mr-4" />
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
                  className="flex items-center p-4 rounded-xl hover:bg-yellow-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-yellow-200"
                >
                  <div className="flex items-center flex-1">
                    <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-yellow-700 transition-colors">
                      {item.number}
                    </div>
                    <Icon className="h-6 w-6 text-yellow-600 mr-4 group-hover:text-yellow-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-yellow-800 font-medium transition-colors text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-yellow-400 group-hover:text-yellow-600 transition-colors">
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
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <Wrench className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Engineering
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Engineering in early childhood is about nurturing curiosity,
              creativity, and the ability to solve problems through hands-on
              exploration. Children are natural engineers—they love to build,
              take things apart, and figure out how things work. By providing
              opportunities to design, construct, and experiment, we lay the
              foundation for lifelong learning and innovation.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Through engineering activities, children develop critical
              thinking, perseverance, and collaboration skills. These
              experiences empower them to become confident creators and
              problem-solvers in a rapidly changing world.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop&crop=center"
              alt="Children collaborating and building with blocks and construction toys, representing engineering concepts"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child is a builder and inventor at heart
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Engineering */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg p-8 mb-8 border border-orange-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-orange-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Engineering
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Wrench className="h-10 w-10 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Problem-Solving Skills
            </h4>
            <p className="text-gray-600">
              Engineering activities foster logical thinking, perseverance, and
              creative solutions to real-world challenges
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Users className="h-10 w-10 text-yellow-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Collaboration & Communication
            </h4>
            <p className="text-gray-600">
              Children learn to work together, share ideas, and communicate
              effectively while building and designing
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Brain className="h-10 w-10 text-pink-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              STEM Foundations
            </h4>
            <p className="text-gray-600">
              Early engineering experiences build a strong base for future
              learning in science, technology, engineering, and math
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Research shows that children who engage in engineering activities
            develop stronger spatial reasoning, critical thinking, and
            resilience. These skills are essential for success in school and
            beyond, preparing children to tackle complex problems and adapt to
            new situations.
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
                  knowledge best through hands-on building and experimentation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-3">•</span>
                <div>
                  <strong>Iterative Design:</strong> Emphasizes the importance
                  of testing, revising, and improving ideas
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-3">•</span>
                <div>
                  <strong>Collaboration:</strong> Learning is enhanced through
                  social interaction and shared projects
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-6">
              STEM/STEAM Approaches
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Integration:</strong> Engineering is naturally
                  integrated with science, math, art, and technology
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Inquiry-Based Learning:</strong> Children ask
                  questions, investigate, and discover solutions
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Creativity:</strong> Encourages innovative thinking
                  and open-ended exploration
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&h=400&fit=crop&crop=center"
            alt="Children working together on a STEM engineering project with building materials and teamwork"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">Learning by Doing</h4>
            <p className="text-sm leading-relaxed">
              Engineering experiences are most powerful when children are active
              participants in the design and building process.
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
          <Palette className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources and Environment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop&crop=center"
              alt="Children's engineering area with blocks, gears, and recycled materials for building and inventing"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Inspiring spaces encourage creative building and problem-solving
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Wrench className="h-6 w-6 text-green-600 mr-3" />
                Building Materials
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">Blocks & Bricks:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Wooden blocks</li>
                    <li>• Foam bricks</li>
                    <li>• Magnetic tiles</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">Loose Parts:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Recycled materials</li>
                    <li>• Cardboard tubes</li>
                    <li>• Bottle caps, lids, and spools</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="h-6 w-6 text-yellow-600 mr-3" />
                Tools & Technology
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Child-safe hammers and screwdrivers</li>
                <li>• Measuring tapes and rulers</li>
                <li>• Simple pulleys and levers</li>
                <li>• Early coding and robotics toys</li>
                <li>• Digital cameras for documenting projects</li>
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
                <span className="text-indigo-600 mr-2">🔧</span>
                <span>Stacking and knocking down blocks</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔧</span>
                <span>Exploring textures and shapes</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔧</span>
                <span>Simple cause-and-effect toys</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔧</span>
                <span>Rolling objects down ramps</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔧</span>
                <span>Building bridges and towers</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔧</span>
                <span>Exploring simple machines</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔧</span>
                <span>Collaborative construction projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔧</span>
                <span>Inventing new uses for materials</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-pink-800 mb-4">
              School Age
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔧</span>
                <span>Designing and testing structures</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔧</span>
                <span>Exploring robotics and coding</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔧</span>
                <span>Participating in engineering challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🔧</span>
                <span>Documenting and sharing projects</span>
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
                      className="flex items-start p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow"
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
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <FileText className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Critical Reflection
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-blue-600 mr-3" />
                Inclusive Practices
              </h3>
              <p className="text-gray-700 leading-relaxed">
                How can we ensure that engineering activities are accessible and
                meaningful for children with diverse abilities, backgrounds, and
                learning styles? Consider adaptations and multiple ways for
                children to participate and express their ideas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="h-6 w-6 text-green-600 mr-3" />
                Assessment and Documentation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What meaningful ways can we document children's growth in
                engineering thinking? How do we capture the creativity,
                problem-solving, and learning that occurs in these experiences
                while respecting each child's unique journey?
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop&crop=center"
              alt="Children working together on engineering projects, building with blocks and tools"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child deserves to experience the joy of building and
                inventing
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            As educators, we must continuously reflect on our practices to
            ensure that engineering experiences truly serve all children. This
            includes considering how we can honor diverse backgrounds, support
            children with varying abilities, and create environments where every
            child feels confident to express their ideas and solutions.
          </p>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Home className="h-6 w-6 text-yellow-500 mr-3" />
            Explore Science Activities
          </h3>
          <p className="text-gray-600 mb-4">
            Discover hands-on science experiences that complement engineering
            learning
          </p>
          <a
            href="/science"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Learn More →
          </a>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Palette className="h-6 w-6 text-green-500 mr-3" />
            Art & Creativity
          </h3>
          <p className="text-gray-600 mb-4">
            Explore creative art experiences that inspire engineering thinking
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
              Clements, D. H., & Sarama, J. (2016).{" "}
              <em>
                Learning and teaching early math: The learning trajectories
                approach
              </em>
              . Routledge.
            </p>
            <p>
              National Association for the Education of Young Children (NAEYC).
              (2020). <em>STEM in early childhood education</em>.
            </p>
            <p>
              Martinez, S. L., & Stager, G. (2013).{" "}
              <em>
                Invent to learn: Making, tinkering, and engineering in the
                classroom
              </em>
              . Constructing Modern Knowledge Press.
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
