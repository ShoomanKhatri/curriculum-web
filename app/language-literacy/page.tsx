import Image from "next/image";
import {
  BookOpen,
  Users,
  Brain,
  FileText,
  Home,
  List as ListIcon,
  Sparkles,
  Award,
  Target,
  Lightbulb,
  PenLine,
  MessageCircle,
  Book,
  Clock,
  Star,
  Heart,
} from "lucide-react";

export default function LanguageLiteracyPage() {
  // Age groups with timeline activities for language and literacy
  const ageGroups = [
    {
      age: "0-12 months",
      timeline: [
        "Listening to soothing voices and lullabies",
        "Babbling and imitating sounds",
        "Looking at board books with bright images",
        "Responding to facial expressions and gestures",
        "Exploring textures and objects with names",
      ],
    },
    {
      age: "1-2 years",
      timeline: [
        "Naming familiar objects and people",
        "Pointing to pictures in books",
        "Singing simple rhymes and songs",
        "Imitating animal sounds and actions",
        "Using single words and simple phrases",
      ],
    },
    {
      age: "2-3 years",
      timeline: [
        "Telling short stories with pictures",
        "Asking and answering simple questions",
        "Exploring alphabet puzzles and blocks",
        "Drawing lines and circles with crayons",
        "Listening to read-alouds and repeating phrases",
      ],
    },
    {
      age: "3-4 years",
      timeline: [
        "Retelling favorite stories in their own words",
        "Recognizing letters and their sounds",
        "Rhyming games and word play",
        "Writing their name with support",
        "Role-playing with puppets and props",
      ],
    },
    {
      age: "4-5 years",
      timeline: [
        "Creating simple books and stories",
        "Identifying beginning sounds in words",
        "Writing letters and drawing pictures",
        "Playing with syllables and word segments",
        "Engaging in group storytelling and drama",
      ],
    },
  ];

  // Function to get appropriate icon for timeline items
  const getTimelineIcon = (index: number) => {
    const icons = [Book, PenLine, MessageCircle, BookOpen, Star, Clock];
    return icons[index % icons.length];
  };

  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Language and Literacy",
      href: "#introduction",
      icon: BookOpen,
    },
    {
      number: "2",
      title: "Importance of Language and Literacy",
      href: "#importance",
      icon: Brain,
    },
    {
      number: "3",
      title: "Theoretical Foundations",
      href: "#theories",
      icon: Lightbulb,
    },
    {
      number: "4",
      title: "Resources and Environment",
      href: "#resources",
      icon: Users,
    },
    {
      number: "5",
      title: "Age-Appropriate Activities",
      href: "#activities",
      icon: PenLine,
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
      <div className="bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 mr-4 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Language and Literacy in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Building strong foundations for communication, reading, and writing
            through joyful experiences
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-8 mb-12 border border-indigo-100">
        <div className="flex items-center mb-8">
          <ListIcon className="h-10 w-10 text-indigo-600 mr-4" />
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
                  className="flex items-center p-4 rounded-xl hover:bg-indigo-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-indigo-200"
                >
                  <div className="flex items-center flex-1">
                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-indigo-700 transition-colors">
                      {item.number}
                    </div>
                    <Icon className="h-6 w-6 text-indigo-600 mr-4 group-hover:text-indigo-700 transition-colors" />
                    <span className="text-gray-700 group-hover:text-indigo-800 font-medium transition-colors text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-indigo-400 group-hover:text-indigo-600 transition-colors">
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
        className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100"
      >
        <div className="flex items-center mb-6">
          <BookOpen className="h-10 w-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Language and Literacy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Language and literacy are the cornerstones of communication,
              learning, and self-expression. In early childhood, these skills
              develop rapidly through rich interactions, playful exploration,
              and meaningful experiences with books, stories, and conversation.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              By nurturing a love of language and literacy from birth, educators
              and families empower children to become confident communicators,
              creative thinkers, and lifelong learners.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://www.oneeducation.org.uk/wp-content/uploads/2021/10/Communication-skills-for-children.jpg"
              alt="Baby looking at a book with a caregiver, early language and literacy development"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every story shared builds a foundation for lifelong learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Language and Literacy */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Language and Literacy
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <BookOpen className="h-10 w-10 text-pink-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Cognitive Development
            </h4>
            <p className="text-gray-600">
              Language and literacy skills support memory, attention, reasoning,
              and problem-solving abilities
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Heart className="h-10 w-10 text-indigo-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Social-Emotional Growth
            </h4>
            <p className="text-gray-600">
              Communication and storytelling foster empathy, self-esteem, and
              strong relationships
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Users className="h-10 w-10 text-yellow-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Academic Readiness
            </h4>
            <p className="text-gray-600">
              Early literacy experiences lay the groundwork for reading,
              writing, and future academic success
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Research shows that children who are immersed in language-rich
            environments from birth develop stronger vocabularies, better
            comprehension, and greater confidence as readers and writers. These
            skills are essential for success in school and beyond.
          </p>
        </div>
      </section>

      {/* Theoretical Foundations */}
      <section
        id="theories"
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <Lightbulb className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Theoretical Foundations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-6">
              Vygotsky's Social Interaction Theory
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Zone of Proximal Development:</strong> Children learn
                  language best with support from adults and peers
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Scaffolding:</strong> Adults model and guide language
                  use, gradually increasing independence
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Social Interaction:</strong> Conversation and play are
                  key to language growth
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
              Emergent Literacy Theory
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <div>
                  <strong>Print Awareness:</strong> Understanding that print
                  carries meaning and can be read
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <div>
                  <strong>Phonological Awareness:</strong> Recognizing and
                  playing with sounds in language
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-3">•</span>
                <div>
                  <strong>Motivation:</strong> Enjoyment of books and stories
                  drives literacy development
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://www.laparent.com/wp-content/uploads/2018/09/Children-sitting-on-floor-and-reading-tale-book-in-preschool-libraryKindergarten-school-education-concept.-859996890_3869x2580-copy-768x512.jpeg"
            alt="Children reading and sharing stories together in a cozy classroom"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">Learning Together</h4>
            <p className="text-sm leading-relaxed">
              Language and literacy flourish in supportive, interactive
              environments
            </p>
          </div>
        </div>
      </section>

      {/* Resources and Environment */}
      <section
        id="resources"
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <Users className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources and Environment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://cdn.raring2go.co.uk/wp-content/uploads/2022/03/30134628/kidslearn1.jpg"
              alt="Inviting reading corner with books, cushions, and puppets"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                A print-rich, cozy environment invites children to explore
                language
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Book className="h-6 w-6 text-blue-600 mr-3" />
                Books and Storytelling
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Board books and picture books</li>
                <li>• Story baskets and puppets</li>
                <li>• Audio stories and listening centers</li>
                <li>• Family language books</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-pink-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <PenLine className="h-6 w-6 text-pink-600 mr-3" />
                Writing and Expression
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Crayons, markers, and pencils</li>
                <li>• Alphabet blocks and puzzles</li>
                <li>• Magnetic letters and boards</li>
                <li>• Journals and drawing pads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Activities */}
      <section
        id="activities"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <PenLine className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Age-Appropriate Activities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-pink-800 mb-4">
              Infants & Toddlers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">📚</span>
                <span>Looking at books and naming pictures</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🗣️</span>
                <span>Imitating animal sounds and simple words</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🎶</span>
                <span>Singing nursery rhymes and fingerplays</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">👀</span>
                <span>Pointing to objects and following directions</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✏️</span>
                <span>Drawing and writing letters</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">📖</span>
                <span>Retelling stories with props</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔤</span>
                <span>Playing alphabet and rhyming games</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">📝</span>
                <span>Making simple books and journals</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              School Age
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">📚</span>
                <span>Reading independently and in groups</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">✍️</span>
                <span>Writing stories and poems</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🎭</span>
                <span>Role-playing and drama activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🔎</span>
                <span>Exploring new words and meanings</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developmental Timelines */}
      <section
        id="timelines"
        className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100"
      >
        <div className="flex items-center mb-8">
          <Clock className="h-10 w-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Developmental Timelines
          </h2>
        </div>

        <div className="space-y-8">
          {ageGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                {group.age}
              </h3>
              <div className="grid gap-4">
                {group.timeline.map((activity, index) => {
                  const IconComponent = getTimelineIcon(index);
                  return (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="bg-indigo-600 rounded-full p-3 mr-4 flex-shrink-0">
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
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <FileText className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Critical Reflection
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-yellow-600 mr-3" />
                Inclusive Practices
              </h3>
              <p className="text-gray-700 leading-relaxed">
                How can we ensure that language and literacy activities are
                accessible and meaningful for children with diverse abilities,
                home languages, and learning styles? Consider adaptations and
                multiple ways for children to participate and express
                themselves.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-orange-600 mr-3" />
                Assessment and Documentation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What meaningful ways can we document children's growth in
                language and literacy? How do we capture the joy, creativity,
                and learning that occurs in these experiences while respecting
                each child's unique journey?
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://educomics.org/wp-content/uploads/2021/10/images2574-61765a1b595b2.jpg"
              alt="Children sharing stories and writing together in a diverse classroom"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child deserves to find their voice through language and
                literacy
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            As educators, we must continuously reflect on our practices to
            ensure that language and literacy experiences truly serve all
            children. This includes honoring home languages, supporting children
            with varying abilities, and creating environments where every child
            feels confident to express themselves through words, stories, and
            writing.
          </p>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-100 to-indigo-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Home className="h-6 w-6 text-pink-500 mr-3" />
            Explore Art Activities
          </h3>
          <p className="text-gray-600 mb-4">
            Discover creative art experiences that complement language and
            literacy learning
          </p>
          <a
            href="/art"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
          >
            Learn More →
          </a>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Users className="h-6 w-6 text-indigo-500 mr-3" />
            Movement & Music
          </h3>
          <p className="text-gray-600 mb-4">
            Explore movement and music activities that support language
            development
          </p>
          <a
            href="/movement-music"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold"
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
              Vygotsky, L. S. (1978).{" "}
              <em>
                Mind in society: The development of higher psychological
                processes
              </em>
              . Harvard University Press.
            </p>
            <p>
              Whitehurst, G. J., & Lonigan, C. J. (1998).{" "}
              <em>Child development and emergent literacy</em>. Child
              Development, 69(3), 848-872.
            </p>
            <p>
              Neuman, S. B., & Dickinson, D. K. (Eds.). (2011).{" "}
              <em>Handbook of early literacy research</em> (Vol. 3). Guilford
              Press.
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
