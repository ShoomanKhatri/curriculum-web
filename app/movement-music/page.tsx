import Image from "next/image";
import {
  Music,
  Brain,
  Wrench,
  Users,
  Clock,
  FileText,
  Home,
  Heart,
  Award,
  Target,
  BookOpen,
  Sparkles,
  ListIcon as List,
  Volume2,
  Play,
  Headphones,
  Zap,
  Star,
} from "lucide-react";

export default function MovementMusicPage() {
  // Age groups with timeline activities for movement and music
  const ageGroups = [
    {
      age: "0-12 months",
      timeline: [
        "Gentle lullabies and soft music during routines",
        "Simple body movements like clapping and gentle bouncing",
        "Exploring different textures and sounds through touch",
        "Following simple rhythms with body movements",
        "Responding to music with facial expressions and gestures",
      ],
    },
    {
      age: "1-2 years",
      timeline: [
        "Dancing to different types of music",
        "Simple instrument exploration (shakers, drums)",
        "Moving to fast and slow rhythms",
        "Imitating animal movements with music",
        "Singing simple repetitive songs",
        "Exploring cause and effect with musical toys",
      ],
    },
    {
      age: "2-3 years",
      timeline: [
        "Creating simple rhythms with body percussion",
        "Moving scarves and ribbons to music",
        "Learning action songs and finger plays",
        "Exploring different ways to move (tip-toe, march, crawl)",
        "Making music with household items",
        "Following simple musical instructions",
      ],
    },
    {
      age: "3-4 years",
      timeline: [
        "Participating in group musical games",
        "Creating simple compositions with instruments",
        "Learning about loud/soft, fast/slow concepts",
        "Dancing with props and costumes",
        "Singing familiar songs from memory",
        "Exploring different genres of music",
        "Developing gross motor skills through dance",
      ],
    },
    {
      age: "4-5 years",
      timeline: [
        "Composing simple melodies and rhythms",
        "Learning basic musical concepts (beat, tempo)",
        "Choreographing simple dance sequences",
        "Playing simple musical games with rules",
        "Exploring cultural music and dance styles",
        "Recording and listening to their own musical creations",
        "Developing coordination through complex movements",
      ],
    },
  ];

  // Function to get appropriate icon for timeline items
  const getTimelineIcon = (index: number) => {
    const icons = [Music, Volume2, Play, Headphones, Zap, Star];
    return icons[index % icons.length];
  };

  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Movement and Music",
      href: "#introduction",
      icon: Music,
    },
    {
      number: "2",
      title: "Importance of Movement and Music",
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
            <Music className="h-12 w-12 mr-4 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Movement and Music in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Fostering rhythm, expression, and physical development through the
            joy of movement and music
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 mb-12 border border-blue-100">
        <div className="flex items-center mb-8">
          <List className="h-10 w-10 text-blue-600 mr-4" />
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
          <Music className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Movement and Music
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Movement and music are fundamental aspects of human expression and
              development. In early childhood education, these powerful mediums
              work together to support physical, cognitive, emotional, and
              social growth in ways that few other activities can achieve.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From the earliest months of life, children naturally respond to
              rhythm, melody, and the invitation to move their bodies. This
              innate connection to music and movement provides educators with
              rich opportunities to support holistic development while honoring
              each child's unique way of expressing themselves through sound and
              motion.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=400&fit=crop&crop=center"
              alt="Baby crawling and moving on a soft play mat, showing early movement development"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Movement begins in infancy—every wiggle, crawl, and stretch matters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Movement and Music */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Movement and Music
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Brain className="h-10 w-10 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Cognitive Development
            </h4>
            <p className="text-gray-600">
              Music and movement enhance memory, pattern recognition,
              mathematical concepts, and language development
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Heart className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Physical Development
            </h4>
            <p className="text-gray-600">
              Gross and fine motor skills, coordination, balance, and body
              awareness are strengthened through movement
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Users className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Social-Emotional Growth
            </h4>
            <p className="text-gray-600">
              Self-expression, emotional regulation, cultural appreciation, and
              collaborative skills develop naturally
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Research consistently demonstrates that children who engage
            regularly in movement and music activities show enhanced brain
            development, improved academic readiness, stronger social skills,
            and greater emotional resilience. These activities support the
            integration of multiple developmental domains simultaneously, making
            them invaluable components of quality early childhood programs.
          </p>
        </div>
      </section>

      {/* Theoretical Foundation */}
      <section
        id="theories"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <BookOpen className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Theoretical Foundation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Dalcroze Method
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Eurhythmics:</strong> Learning music through movement
                  and physical expression
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Body as Instrument:</strong> Using the entire body to
                  understand musical concepts
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Improvisation:</strong> Encouraging spontaneous
                  creative movement and musical expression
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Multiple Intelligences Theory
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Musical Intelligence:</strong> Sensitivity to rhythm,
                  pitch, melody, and tone
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Bodily-Kinesthetic:</strong> Learning through physical
                  movement and body awareness
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <div>
                  <strong>Spatial Intelligence:</strong> Understanding space,
                  movement, and visual patterns
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center"
            alt="Children engaged in structured movement and music learning activities"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">Integrated Learning</h4>
            <p className="text-sm leading-relaxed">
              Movement and music naturally integrate multiple learning domains,
              supporting holistic development through joyful engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Resources and Environment */}
      <section
        id="resources"
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <Wrench className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources and Environment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
              alt="Well-organized early childhood music and movement space with instruments and props"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Creating inviting spaces for musical exploration and movement
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Music className="h-6 w-6 text-yellow-600 mr-3" />
                Musical Instruments
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">Percussion:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Drums and tambourines</li>
                    <li>• Shakers and maracas</li>
                    <li>• Rhythm sticks</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">Melodic:</strong>
                  <ul className="text-gray-600 text-sm mt-1">
                    <li>• Xylophones</li>
                    <li>• Bells and chimes</li>
                    <li>• Simple keyboards</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-orange-600 mr-3" />
                Movement Props
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Colorful scarves and ribbons</li>
                <li>• Parachutes for group activities</li>
                <li>• Bean bags and soft balls</li>
                <li>• Hula hoops and tunnels</li>
                <li>• Balance beams and stepping stones</li>
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
                <span className="text-indigo-600 mr-2">♪</span>
                <span>Gentle rocking to lullabies</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">♪</span>
                <span>Simple fingerplays and action songs</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">♪</span>
                <span>Exploring textured instruments</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">♪</span>
                <span>Dancing with caregivers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">♪</span>
                <span>Group musical games and activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">♪</span>
                <span>Creative movement with props</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">♪</span>
                <span>Simple composition and improvisation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">♪</span>
                <span>Cultural music and dance exploration</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              School Age
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">♪</span>
                <span>Complex rhythmic patterns and coordination</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">♪</span>
                <span>Choreographed group performances</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">♪</span>
                <span>Music theory and notation basics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">♪</span>
                <span>Leadership roles in musical activities</span>
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
                How can we ensure that movement and music activities are
                accessible and meaningful for children with diverse abilities,
                cultural backgrounds, and learning styles? Consider adaptations
                and multiple ways for children to participate and express
                themselves.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-yellow-600 mr-3" />
                Assessment and Documentation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What meaningful ways can we document children's growth in
                movement and musical expression? How do we capture the joy,
                creativity, and learning that occurs in these experiences while
                respecting each child's unique journey?
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center"
              alt="Diverse group of children engaged in inclusive movement and music activities"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child deserves to experience the joy of movement and music
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            As educators, we must continuously reflect on our practices to
            ensure that movement and music experiences truly serve all children.
            This includes considering how we can honor diverse cultural musical
            traditions, support children with varying physical abilities, and
            create environments where every child feels confident to express
            themselves through sound and movement.
          </p>
        </div>
      </section>

      {/* Navigation to Other Pages */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Home className="h-6 w-6 text-pink-500 mr-3" />
            Explore Art Activities
          </h3>
          <p className="text-gray-600 mb-4">
            Discover creative art experiences that complement movement and music
            learning
          </p>
          <a
            href="/art"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
          >
            Learn More →
          </a>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Users className="h-6 w-6 text-purple-500 mr-3" />
            Drama & Puppetry
          </h3>
          <p className="text-gray-600 mb-4">
            Explore dramatic expression that naturally integrates with musical
            experiences
          </p>
          <a
            href="/drama-puppetry"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
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
              Dalcroze, É. J. (1921). <em>Rhythm, music and education</em>.
              Putnam.
            </p>
            <p>
              Gardner, H. (2011).{" "}
              <em>Frames of mind: The theory of multiple intelligences</em>.
              Basic Books.
            </p>
            <p>
              Kenney, S. (2008).{" "}
              <em>
                Nursery rhymes, songs, and singing games for young children
              </em>
              . Music Educators National Conference.
            </p>
            <p>
              Weikart, P. S. (2003).{" "}
              <em>
                Teaching movement and dance: A sequential approach to rhythmic
                movement
              </em>{" "}
              (5th ed.). High/Scope Press.
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
