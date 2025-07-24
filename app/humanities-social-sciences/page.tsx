import Image from "next/image";
import {
  BookOpen,
  Brain,
  Users,
  Clock,
  FileText,
  Home,
  List as ListIcon,
  Lightbulb,
  Sparkles,
  Palette,
  Award,
  Target,
  Globe,
  Heart,
  Star,
} from "lucide-react";

export default function HumanitiesSocialSciencesPage() {
  // Age groups with timeline activities for HASS
  const ageGroups = [
    {
      age: "0-12 months",
      timeline: [
        "Responding to familiar faces and voices",
        "Exploring family photos and simple picture books",
        "Noticing routines and daily patterns",
        "Listening to songs about family and community",
        "Observing caregivers' emotions and actions",
      ],
    },
    {
      age: "1-2 years",
      timeline: [
        "Pointing to and naming family members",
        "Exploring cultural music and foods",
        "Looking at maps and globes with adults",
        "Imitating social behaviors (waving, sharing)",
        "Simple pretend play about home and community",
      ],
    },
    {
      age: "2-3 years",
      timeline: [
        "Talking about feelings and friendships",
        "Exploring community helper roles (doctor, firefighter)",
        "Learning about different places and cultures",
        "Participating in group routines and celebrations",
        "Exploring nature and the environment",
      ],
    },
    {
      age: "3-4 years",
      timeline: [
        "Retelling family stories and traditions",
        "Role-playing community helpers and leaders",
        "Exploring maps, flags, and symbols",
        "Learning about fairness and sharing",
        "Participating in group projects and discussions",
      ],
    },
    {
      age: "4-5 years",
      timeline: [
        "Creating simple family trees and timelines",
        "Exploring world cultures and languages",
        "Learning about rules and responsibilities",
        "Investigating local history and landmarks",
        "Participating in community service projects",
      ],
    },
  ];

  // Function to get appropriate icon for timeline items
  const getTimelineIcon = (index: number) => {
    const icons = [BookOpen, Globe, Heart, Users, Star, Lightbulb];
    return icons[index % icons.length];
  };

  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Humanities & Social Sciences",
      href: "#introduction",
      icon: BookOpen,
    },
    {
      number: "2",
      title: "Importance of HASS in Early Childhood",
      href: "#importance",
      icon: Brain,
    },
    {
      number: "3",
      title: "Theoretical Foundation",
      href: "#theories",
      icon: Lightbulb,
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
      <div className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 mr-4 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Humanities & Social Sciences in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Fostering identity, belonging, and understanding of the world
            through stories, culture, and community
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
          <BookOpen className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Humanities & Social Sciences
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Humanities and Social Sciences (HASS) in early childhood education
              help children understand themselves, their families, and their
              communities. Through stories, cultural celebrations, and group
              activities, children develop a sense of identity, belonging, and
              respect for diversity.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              By exploring history, geography, cultures, and social
              relationships, children build empathy, curiosity, and the skills
              to participate in a diverse and changing world.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://www.wou.edu.my/wp-content/uploads/Early-Childhood-Education-1.png"
              alt="Children exploring family, community, and world cultures through stories and play"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child is a citizen of their community and the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of HASS */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of HASS in Early Childhood
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Heart className="h-10 w-10 text-pink-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Identity & Belonging
            </h4>
            <p className="text-gray-600">
              HASS activities help children understand who they are, where they
              belong, and how they connect with others
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Globe className="h-10 w-10 text-yellow-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Cultural Understanding
            </h4>
            <p className="text-gray-600">
              Children learn to appreciate diversity, respect differences, and
              celebrate cultural traditions
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Social Skills & Empathy
            </h4>
            <p className="text-gray-600">
              HASS experiences foster empathy, cooperation, and the ability to
              participate in group life
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Research shows that children who engage in HASS activities develop
            stronger social skills, cultural awareness, and a sense of
            responsibility. These skills are essential for success in school and
            for building inclusive, caring communities.
          </p>
        </div>
      </section>

      {/* Theoretical Foundation */}
      <section
        id="theories"
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <Lightbulb className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Theoretical Foundation
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Bronfenbrenner's Ecological Systems Theory
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Multiple Environments:</strong> Children are
                  influenced by family, community, culture, and society
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Interconnectedness:</strong> Experiences in one
                  setting affect development in others
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Holistic Development:</strong> Social, emotional, and
                  cultural growth are all important
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-6">
              Sociocultural Theory (Vygotsky)
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Social Interaction:</strong> Learning happens through
                  relationships and shared experiences
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Language & Culture:</strong> Communication and
                  cultural tools shape thinking
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Guided Participation:</strong> Adults and peers
                  support learning through collaboration
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.wou.edu.my/wp-content/uploads/Bachelor-of-Education-Honours-1.png"
            alt="Children exploring maps, cultures, and social relationships in a group setting"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">Learning Together</h4>
            <p className="text-sm leading-relaxed">
              HASS experiences are most powerful when children learn through
              relationships, stories, and shared projects.
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
              src="https://www.wou.edu.my/wp-content/uploads/Early-Childhood-Education-1.png"
              alt="Children's area with books, maps, and cultural artifacts for exploring HASS concepts"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Inspiring spaces encourage curiosity about people, places, and
                cultures
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                HASS Materials
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">Books & Stories:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Family photo albums</li>
                    <li>• Storybooks about cultures</li>
                    <li>• Maps and globes</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">Cultural Artifacts:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Traditional clothing</li>
                    <li>• Musical instruments</li>
                    <li>• Art and craft materials</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="h-6 w-6 text-yellow-600 mr-3" />
                Visual Supports
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Posters of world landmarks</li>
                <li>• Flags and symbols</li>
                <li>• Puzzles of people and places</li>
                <li>• Digital storybooks and videos</li>
                <li>• Community helper props</li>
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
                <span className="text-indigo-600 mr-2">🌍</span>
                <span>Looking at family photos and simple books</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🌍</span>
                <span>Listening to songs about family and community</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🌍</span>
                <span>Exploring routines and daily patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🌍</span>
                <span>Imitating social behaviors (waving, sharing)</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🌍</span>
                <span>Exploring community helper roles</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🌍</span>
                <span>Learning about different places and cultures</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🌍</span>
                <span>Participating in group routines and celebrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🌍</span>
                <span>Talking about feelings and friendships</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-pink-800 mb-4">
              School Age
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🌍</span>
                <span>Creating simple family trees and timelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🌍</span>
                <span>Exploring world cultures and languages</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🌍</span>
                <span>Learning about rules and responsibilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">🌍</span>
                <span>Participating in community service projects</span>
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
                      className="flex items-start p-4 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow"
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
                How can we ensure that HASS activities are accessible and
                meaningful for children with diverse abilities, backgrounds, and
                learning styles? Consider adaptations and multiple ways for
                children to participate and express their ideas.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="h-6 w-6 text-yellow-600 mr-3" />
                Assessment and Documentation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What meaningful ways can we document children's growth in HASS?
                How do we capture the creativity, empathy, and learning that
                occurs in these experiences while respecting each child's unique
                journey?
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/americanschools/20190920/20190920204317.jpg"
              alt="Children working together on social studies projects, exploring cultures and communities"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child deserves to explore their world and community
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            As educators, we must continuously reflect on our practices to
            ensure that HASS experiences truly serve all children. This includes
            considering how we can honor diverse backgrounds, support children
            with varying abilities, and create environments where every child
            feels confident to share their stories and ideas.
          </p>
        </div>
      </section>
      {/* Navigation to Other Pages */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-yellow-100 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Home className="h-6 w-6 text-yellow-500 mr-3" />
            Explore Science Activities
          </h3>
          <p className="text-gray-600 mb-4">
            Discover hands-on science experiences that complement HASS learning
          </p>
          <a
            href="/science"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Learn More →
          </a>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-green-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Palette className="h-6 w-6 text-pink-500 mr-3" />
            Art & Creativity
          </h3>
          <p className="text-gray-600 mb-4">
            Explore creative art experiences that inspire social and cultural
            understanding
          </p>
          <a
            href="/art"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
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
              Bronfenbrenner, U. (1979).{" "}
              <em>The ecology of human development</em>. Harvard University
              Press.
            </p>
            <p>
              Vygotsky, L. S. (1978).{" "}
              <em>
                Mind in society: The development of higher psychological
                processes
              </em>
              . Harvard University Press.
            </p>
            <p>
              Australian Children's Education and Care Quality Authority.
              (2020). <em>National Quality Standard</em>. ACECQA.
            </p>
            <p>
              Department of Education, Employment and Workplace Relations.
              (2009).{" "}
              <em>
                Belonging, being and becoming: The Early Years Learning
                Framework for Australia
              </em>
              . Commonwealth of Australia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
