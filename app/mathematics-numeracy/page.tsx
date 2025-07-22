import Image from "next/image";
import {
  Calculator,
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
  CheckCircle,
  Ruler,
  BarChart3,
  Shapes,
  Plus,
  Divide,
  Minus,
  Equal,
} from "lucide-react";

export default function MathematicsNumeracyPage() {
  // Age groups with timeline activities for mathematics and numeracy
  const ageGroups = [
    {
      age: "0-12 months",
      timeline: [
        "Exploring objects of different sizes and shapes",
        "Listening to counting songs and rhymes",
        "Noticing patterns in daily routines",
        "Stacking and sorting toys",
        "Responding to simple number words (one, two, more)",
      ],
    },
    {
      age: "1-2 years",
      timeline: [
        "Pointing to and naming numbers in books",
        "Sorting objects by color, size, or shape",
        "Building towers and comparing heights",
        "Counting steps, snacks, or toys with adults",
        "Simple matching and grouping games",
      ],
    },
    {
      age: "2-3 years",
      timeline: [
        "Reciting numbers in order",
        "Recognizing shapes in the environment",
        "Comparing quantities (more, less, same)",
        "Simple puzzles and pattern blocks",
        "Exploring measurement with cups and spoons",
      ],
    },
    {
      age: "3-4 years",
      timeline: [
        "Counting objects up to 10 or more",
        "Sorting and classifying by multiple attributes",
        "Creating and extending patterns",
        "Exploring time with daily schedules",
        "Simple addition and subtraction with objects",
      ],
    },
    {
      age: "4-5 years",
      timeline: [
        "Recognizing numerals and writing numbers",
        "Solving simple math problems in play",
        "Measuring and comparing length, weight, and volume",
        "Graphing favorite foods or colors",
        "Exploring money and simple transactions",
      ],
    },
  ];

  // Function to get appropriate icon for timeline items
  const getTimelineIcon = (index: number) => {
    const icons = [
      Calculator,
      Ruler,
      BarChart3,
      Shapes,
      Plus,
      Minus,
      Divide,
      Equal,
      CheckCircle,
    ];
    return icons[index % icons.length];
  };

  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Mathematics & Numeracy",
      href: "#introduction",
      icon: Calculator,
    },
    {
      number: "2",
      title: "Importance of Early Math Skills",
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
      <div className="bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="h-12 w-12 mr-4 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Mathematics & Numeracy in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Building strong foundations for problem-solving, reasoning, and
            lifelong learning
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-8 mb-12 border border-green-100">
        <div className="flex items-center mb-8">
          <ListIcon className="h-10 w-10 text-green-600 mr-4" />
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
                  className="flex items-center p-4 rounded-xl hover:bg-green-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-green-200"
                >
                  <div className="flex items-center flex-1">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-green-700 transition-colors">
                      {item.number}
                    </div>
                    <Icon className="h-6 w-6 text-green-600 mr-4 group-hover:text-green-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-green-800 font-medium transition-colors text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-green-400 group-hover:text-green-600 transition-colors">
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
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <Calculator className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Mathematics & Numeracy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Mathematics and numeracy are essential for understanding the world
              and solving everyday problems. In early childhood, children
              develop these skills through play, exploration, and meaningful
              interactions with adults and peers.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Early math experiences build confidence, curiosity, and a positive
              attitude toward learning. By providing rich opportunities to
              count, sort, measure, and compare, we help children develop strong
              foundations for future success in school and life.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop&crop=center"
              alt="Children playing with colorful counting blocks, numbers, and shapes, representing early math and numeracy concepts"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child is a mathematician in the making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Early Math Skills */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Early Math Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Calculator className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Problem-Solving & Reasoning
            </h4>
            <p className="text-gray-600">
              Math activities develop logical thinking, reasoning, and the
              ability to solve real-world problems
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <BarChart3 className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Confidence & Curiosity
            </h4>
            <p className="text-gray-600">
              Early success in math builds confidence, curiosity, and a positive
              attitude toward learning
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Shapes className="h-10 w-10 text-yellow-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              STEM Foundations
            </h4>
            <p className="text-gray-600">
              Math is the foundation for future learning in science, technology,
              engineering, and math
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Research shows that early math skills are strong predictors of later
            academic achievement. By nurturing mathematical thinking from the
            start, we help children develop the skills they need to succeed in
            school and beyond.
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
              Piaget's Theory
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Concrete Experiences:</strong> Children learn math
                  best through hands-on exploration and manipulation of objects
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Stages of Development:</strong> Math understanding
                  grows as children move through developmental stages
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Active Learning:</strong> Children construct knowledge
                  by doing, experimenting, and problem-solving
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Sociocultural Theory (Vygotsky)
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Social Interaction:</strong> Math learning is enhanced
                  through collaboration and guided participation
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Language & Math:</strong> Talking about math concepts
                  supports understanding and reasoning
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Zone of Proximal Development:</strong> Children
                  achieve more with support from adults and peers
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop&crop=center"
            alt="Children working together on hands-on math activities with shapes, numbers, and manipulatives"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">Learning by Doing</h4>
            <p className="text-sm leading-relaxed">
              Math experiences are most powerful when children are active
              participants in hands-on exploration and problem-solving.
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
          <Palette className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources and Environment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop&crop=center"
              alt="Children's math area with counting beads, shapes, and colorful manipulatives for numeracy learning"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Inspiring spaces encourage mathematical thinking and discovery
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Calculator className="h-6 w-6 text-pink-600 mr-3" />
                Math Materials
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">Counting & Sorting:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Counters and beads</li>
                    <li>• Sorting trays</li>
                    <li>• Pattern blocks</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">Measurement Tools:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Rulers and tape measures</li>
                    <li>• Scales and measuring cups</li>
                    <li>• Clocks and timers</li>
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
                <li>• Number lines and charts</li>
                <li>• Shape posters and puzzles</li>
                <li>• Graphs and pictograms</li>
                <li>• Math storybooks</li>
                <li>• Digital math games and apps</li>
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
                <span className="text-indigo-600 mr-2">🔢</span>
                <span>Stacking and sorting objects</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔢</span>
                <span>Exploring shapes and colors</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔢</span>
                <span>Counting songs and fingerplays</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔢</span>
                <span>Matching games</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔢</span>
                <span>Counting objects in daily routines</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔢</span>
                <span>Simple addition and subtraction with toys</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔢</span>
                <span>Exploring patterns and sequences</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔢</span>
                <span>Measuring and comparing objects</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              School Age
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔢</span>
                <span>Solving simple math problems in play</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔢</span>
                <span>Graphing and charting information</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔢</span>
                <span>Exploring money and time concepts</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔢</span>
                <span>Math games and puzzles</span>
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
                      className="flex items-start p-4 bg-gradient-to-r from-pink-50 to-green-50 rounded-xl hover:shadow-md transition-shadow"
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
                How can we ensure that math and numeracy activities are
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
                mathematical thinking? How do we capture the creativity,
                problem-solving, and learning that occurs in these experiences
                while respecting each child's unique journey?
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop&crop=center"
              alt="Children working together on numeracy projects, counting and sorting objects, exploring math concepts"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child deserves to experience the joy of math discovery
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            As educators, we must continuously reflect on our practices to
            ensure that math and numeracy experiences truly serve all children.
            This includes considering how we can honor diverse backgrounds,
            support children with varying abilities, and create environments
            where every child feels confident to explore, create, and
            problem-solve with mathematics.
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
            Discover hands-on science experiences that complement math learning
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
            Explore creative art experiences that inspire mathematical thinking
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
              Clements, D. H., & Sarama, J. (2016).{" "}
              <em>
                Learning and teaching early math: The learning trajectories
                approach
              </em>
              . Routledge.
            </p>
            <p>
              Ginsburg, H. P., & Baroody, A. J. (2003).{" "}
              <em>Test of early mathematics ability</em> (3rd ed.). Pro-Ed.
            </p>
            <p>
              National Association for the Education of Young Children (NAEYC).
              (2020). <em>Early math in early childhood education</em>.
            </p>
            <p>
              Sarama, J., & Clements, D. H. (2009).{" "}
              <em>
                Early childhood mathematics education research: Learning
                trajectories for young children
              </em>
              . Routledge.
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
