import {
  Drama,
  Brain,
  Wrench,
  Users,
  Play,
  Camera,
  Clock,
  CheckCircle,
  Sparkles,
  Palette,
  Target,
  Lightbulb,
  FileText,
  ListIcon,
  Home,
} from "lucide-react";
import Image from "next/image";

export default function DramaPuppetryPage() {
  const ageGroups = [
    {
      age: "0-2 Years",
      color: "bg-yellow-100 border-yellow-300",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center",
      activities: [
        {
          title: "Peek-a-Boo Puppet Play",
          description:
            "Use soft hand puppets or finger puppets for interactive peek-a-boo games with simple songs and rhymes. Support object permanence development, social interaction skills, and early language development through predictable, responsive play sequences that encourage anticipation and delight.",
          reference:
            "Adapted from Goldschmied, E. & Jackson, S. (2004). People under three: Young children in day care.",
          timeline: [
            {
              time: "0-3 min",
              activity: "Setup soft puppets and create calm environment",
              icon: "setup",
            },
            {
              time: "3-8 min",
              activity: "Gentle puppet introduction with peek-a-boo games",
              icon: "explore",
            },
            {
              time: "8-12 min",
              activity: "Responsive interaction following infant cues",
              icon: "learn",
            },
            {
              time: "12-15 min",
              activity: "Simple songs and rhymes with puppet movements",
              icon: "create",
            },
          ],
        },
        {
          title: "Mirror Movement and Facial Expression Games",
          description:
            "Use mirrors to encourage imitation of simple movements, facial expressions, and sounds. Incorporate gentle music and responsive interaction. Supports self-awareness development, social connection, body awareness, and early communication skills through playful mirroring and turn-taking.",
          reference:
            "Based on attachment theory principles (Bowlby, 1988) and mirror neuron research",
          timeline: [
            {
              time: "0-2 min",
              activity: "Mirror setup and gentle music introduction",
              icon: "setup",
            },
            {
              time: "2-8 min",
              activity: "Simple facial expressions and movement imitation",
              icon: "explore",
            },
            {
              time: "8-12 min",
              activity: "Turn-taking games with sounds and gestures",
              icon: "learn",
            },
            {
              time: "12-15 min",
              activity: "Celebration of responses and gentle cleanup",
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
          title: "Animal Movement Stories with Music",
          description:
            "Act out simple animal movements while telling familiar stories like 'Brown Bear, Brown Bear' with musical accompaniment. Combine gross motor development with narrative understanding, vocabulary expansion, and imaginative play while supporting rhythm and coordination skills.",
          reference:
            "Isbell, R. & Raines, S. (2013). Creativity and the arts with young children",
          timeline: [
            {
              time: "0-5 min",
              activity: "Story introduction and animal sound exploration",
              icon: "setup",
            },
            {
              time: "5-15 min",
              activity: "Acting out animal movements with story progression",
              icon: "explore",
            },
            {
              time: "15-22 min",
              activity: "Musical accompaniment and rhythm activities",
              icon: "learn",
            },
            {
              time: "22-25 min",
              activity: "Story recap and movement celebration",
              icon: "celebrate",
            },
          ],
        },
        {
          title: "Simple Sock Puppet Conversations",
          description:
            "Create basic sock puppets with button eyes and yarn hair for simple conversations, songs, and interactive games. Encourage language development, turn-taking, and emotional expression through puppet-mediated communication that feels safe and playful for emerging speakers.",
          reference:
            "Hunt, T. & Renfro, N. (2012). Puppetry in early childhood education",
          timeline: [
            {
              time: "0-8 min",
              activity: "Puppet creation with simple materials",
              icon: "setup",
            },
            {
              time: "8-18 min",
              activity: "Puppet introduction and conversation practice",
              icon: "explore",
            },
            {
              time: "18-25 min",
              activity: "Interactive games and turn-taking activities",
              icon: "learn",
            },
            {
              time: "25-30 min",
              activity: "Puppet cleanup and reflection sharing",
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
          title: "Collaborative Fairy Tale Dramatization",
          description:
            "Act out familiar fairy tales like 'The Three Little Pigs' with simple costumes, props, and collaborative role assignment. Develop narrative comprehension, sequencing skills, cooperative play, and character perspective-taking while building confidence in performance and creative expression.",
          reference:
            "Mallett, M. (2009). Young children, picture books and dramatic play",
          timeline: [
            {
              time: "0-5 min",
              activity: "Story review and role discussion",
              icon: "setup",
            },
            {
              time: "5-20 min",
              activity: "Costume selection and character development",
              icon: "explore",
            },
            {
              time: "20-35 min",
              activity: "Collaborative story performance",
              icon: "create",
            },
            {
              time: "35-40 min",
              activity: "Performance reflection and character discussion",
              icon: "share",
            },
          ],
        },
        {
          title: "Emotion Puppet Theater Workshop",
          description:
            "Use various puppets to explore and express different emotions through guided storytelling scenarios. Support emotional literacy, regulation skills, empathy development, and perspective-taking while providing safe opportunities for emotional exploration and expression through puppet characters.",
          reference:
            "Bernier, M. J. & O'Hagan, J. (2008). Puppets and emotional development",
          timeline: [
            {
              time: "0-5 min",
              activity: "Emotion identification and puppet introduction",
              icon: "setup",
            },
            {
              time: "5-15 min",
              activity: "Guided emotional scenarios with puppets",
              icon: "explore",
            },
            {
              time: "15-25 min",
              activity: "Children create their own emotional stories",
              icon: "create",
            },
            {
              time: "25-30 min",
              activity: "Emotional reflection and empathy discussion",
              icon: "share",
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
          title: "Original Script Creation and Performance",
          description:
            "Collaborate to write, rehearse, and perform original short plays based on classroom experiences, current interests, or community themes. Integrate literacy skills, creative writing, teamwork, planning abilities, and presentation skills while fostering innovative thinking and collaborative creativity.",
          reference:
            "Wagner, B. J. (2013). Dorothy Heathcote: Drama as a learning medium",
          timeline: [
            {
              time: "Session 1 (30 min)",
              activity: "Brainstorming themes and collaborative planning",
              icon: "plan",
            },
            {
              time: "Session 2 (35 min)",
              activity: "Script writing and character development",
              icon: "create",
            },
            {
              time: "Session 3 (25 min)",
              activity: "Rehearsal and performance preparation",
              icon: "learn",
            },
            {
              time: "Session 4 (20 min)",
              activity: "Final performance and peer feedback",
              icon: "celebrate",
            },
          ],
        },
        {
          title: "Shadow Puppet Science Storytelling",
          description:
            "Create shadow puppets and perform stories using light sources and shadow manipulation. Combine science concepts about light and shadow with artistic expression, storytelling skills, and technical problem-solving while developing planning, sequencing, and presentation abilities through innovative performance methods.",
          reference:
            "Currell, D. (2008). Shadow puppets and shadow play in early learning",
          timeline: [
            {
              time: "0-10 min",
              activity: "Light and shadow exploration with materials",
              icon: "setup",
            },
            {
              time: "10-25 min",
              activity: "Shadow puppet creation and testing",
              icon: "create",
            },
            {
              time: "25-35 min",
              activity: "Story performance with shadow manipulation",
              icon: "explore",
            },
            {
              time: "35-40 min",
              activity: "Science reflection on light and shadow concepts",
              icon: "analyze",
            },
          ],
        },
      ],
    },
  ];

  const getTimelineIcon = (iconType: string) => {
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
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Drama className="h-12 w-12 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Drama & Puppetry in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Enhancing imaginative thinking through dramatic expression and
            creative storytelling
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
      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl p-8 mb-12 border border-purple-100">
        <div className="flex items-center mb-8">
          <ListIcon className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Table of Contents
          </h2>
        </div>
        <div className="space-y-3">
          <a
            href="#importance"
            className="flex items-center p-4 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-purple-200 group"
          >
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-purple-700 transition-colors">
              1
            </div>
            <Drama className="h-6 w-6 text-purple-600 mr-4 group-hover:text-purple-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-purple-800 font-medium transition-colors text-lg">
              Importance in Early Childhood Creativity
            </span>
            <div className="text-purple-400 group-hover:text-purple-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#theories"
            className="flex items-center p-4 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-purple-200 group"
          >
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-purple-700 transition-colors">
              2
            </div>
            <Brain className="h-6 w-6 text-purple-600 mr-4 group-hover:text-purple-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-purple-800 font-medium transition-colors text-lg">
              Creativity Theories and Perspectives
            </span>
            <div className="text-purple-400 group-hover:text-purple-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#resources"
            className="flex items-center p-4 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-purple-200 group"
          >
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-purple-700 transition-colors">
              3
            </div>
            <Wrench className="h-6 w-6 text-purple-600 mr-4 group-hover:text-purple-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-purple-800 font-medium transition-colors text-lg">
              Resources and Digital Technologies
            </span>
            <div className="text-purple-400 group-hover:text-purple-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#experiences"
            className="flex items-center p-4 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-purple-200 group"
          >
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-purple-700 transition-colors">
              4
            </div>
            <Users className="h-6 w-6 text-purple-600 mr-4 group-hover:text-purple-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-purple-800 font-medium transition-colors text-lg">
              Learning Experiences by Age (0-8 years)
            </span>
            <div className="text-purple-400 group-hover:text-purple-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#activity-timelines"
            className="flex items-center p-4 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-purple-200 group"
          >
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-purple-700 transition-colors">
              5
            </div>
            <Clock className="h-6 w-6 text-purple-600 mr-4 group-hover:text-purple-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-purple-800 font-medium transition-colors text-lg">
              Activity Implementation Timelines
            </span>
            <div className="text-purple-400 group-hover:text-purple-600 transition-colors ml-auto">
              →
            </div>
          </a>

          <a
            href="#reflection"
            className="flex items-center p-4 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:shadow-md border border-transparent hover:border-purple-200 group"
          >
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 group-hover:bg-purple-700 transition-colors">
              6
            </div>
            <FileText className="h-6 w-6 text-purple-600 mr-4 group-hover:text-purple-700 transition-colors" />
            <span className="text-gray-700 group-hover:text-purple-800 font-medium transition-colors text-lg">
              Critical Reflection and Evaluation
            </span>
            <div className="text-purple-400 group-hover:text-purple-600 transition-colors ml-auto">
              →
            </div>
          </a>
        </div>
      </div>

      {/* Section 1: Importance */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100"
      >
        <div className="flex items-center mb-6">
          <Drama className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance in Early Childhood Creativity
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Drama and puppetry serve as powerful catalysts for imaginative
              thinking and creative expression, providing children with safe
              spaces to explore perspectives, experiment with identity, and
              process emotions through symbolic play. These art forms develop
              essential social-emotional skills including empathy, cooperation,
              and conflict resolution while strengthening communication
              abilities.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Puppetry offers unique opportunities for reluctant speakers to
              find their voice, with puppets serving as bridges between internal
              thoughts and external expression, fostering creative
              problem-solving through character motivations and collaborative
              storytelling.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop&crop=center"
              alt="Children engaged in dramatic play and storytelling activities"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Drama and puppetry unlock creative expression in every child
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
          <Brain className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Creativity Theories and Perspectives
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/8613083/pexels-photo-8613083.jpeg?w=600&h=400&fit=crop&crop=center"
              alt="Children learning together through social interaction and collaboration"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Brain className="h-6 w-6 text-yellow-600 mr-3" />
                Theoretical Foundations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Gardner's Multiple Intelligence Theory demonstrates how drama
                engages bodily-kinesthetic, linguistic, interpersonal, and
                intrapersonal intelligences simultaneously. Vygotsky's emphasis
                on symbolic play aligns with dramatic activities where children
                use props and puppets as meaning-making tools.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6">
              <h4 className="font-bold text-yellow-800 mb-4 text-lg">
                Key Theoretical Connections
              </h4>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>
                    Zone of Proximal Development through collaborative
                    storytelling
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>Flow theory in deeply engaging dramatic play</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span>
                    Cognitive flexibility through character perspective-taking
                  </span>
                </li>
              </ul>
            </div>
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
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?w=600&h=400&fit=crop&crop=center"
              alt="Drama and puppetry materials including puppets, costumes, and props"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Carefully selected materials inspire creative expression
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                Essential Materials
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Effective drama and puppetry programs require carefully
                selected, accessible materials that inspire creativity while
                ensuring safety. Hand puppets, finger puppets, and simple
                costume pieces enable quick character transformations without
                overwhelming performers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6">
              <h4 className="font-bold text-blue-800 mb-4 text-lg">
                Material Categories
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">Puppets</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hand puppets</li>
                    <li>• Finger puppets</li>
                    <li>• Sock puppets</li>
                    <li>• Shadow puppets</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">Props</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Simple costumes</li>
                    <li>• Hats & accessories</li>
                    <li>• Fabric pieces</li>
                    <li>• Story props</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Learning Activities */}
      <section
        id="activities"
        className="bg-white rounded-xl shadow-md p-8 mb-8"
      >
        <div className="flex items-center mb-6">
          <Users className="h-8 w-8 text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            Creative Learning Activities by Age Group
          </h2>
        </div>

        <div className="space-y-8">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl p-6 ${group.color}`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {group.age}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {group.activities.map((activity, actIndex) => (
                  <div
                    key={actIndex}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {activity.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {activity.description}
                    </p>

                    <div className="text-xs text-blue-600 mb-3 italic">
                      <strong>Reference:</strong> {activity.reference}
                    </div>

                    {/* Timeline Placeholder */}
                    <div className="bg-gray-50 rounded-lg p-4 text-center border-2 border-dashed border-gray-300">
                      <Clock className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                      <div className="text-gray-500 text-xs font-medium mb-1">
                        Activity Timeline Available
                      </div>
                      <p className="text-xs text-gray-400">
                        See detailed timeline in Activity Timelines section
                      </p>
                    </div>
                  </div>
                ))}
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
            Activity Timelines
          </h2>
        </div>

        <div className="grid gap-8">
          {ageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-200 pb-2">
                {group.age}
              </h3>
              {group.activities.map((activity, activityIndex) => (
                <div
                  key={activityIndex}
                  className="bg-white rounded-xl p-6 shadow-md border border-green-100"
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    {activity.title}
                  </h4>
                  <div className="grid gap-4">
                    {activity.timeline.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg"
                      >
                        <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                          {getTimelineIcon(step.icon)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">
                              {step.time}
                            </span>
                            <span className="text-gray-700">
                              {step.activity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-blue-600 italic">
                    <strong>Reference:</strong> {activity.reference}
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
          <Lightbulb className="h-10 w-10 text-purple-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Critical Reflection and Evaluation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/5303779/pexels-photo-5303779.jpeg?w=600&h=400&fit=crop&crop=center"
              alt="Children reflecting on their creative dramatic experiences"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Reflection enhances learning and creative development
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                Successful Outcomes
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The animal movement stories successfully captured toddlers'
                attention and encouraged active participation. Children
                demonstrated natural storytelling abilities and increased
                confidence through shared dramatic experiences. Collaborative
                script writing exceeded expectations with sophisticated planning
                and creative problem-solving.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
              <h4 className="font-bold text-purple-800 mb-4 text-lg">
                Areas for Future Enhancement
              </h4>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    Implement more flexible timing structures for varied
                    participation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    Provide multiple entry points for shy or reluctant
                    participants
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">•</span>
                  <span>
                    Integrate more technology tools for documenting creative
                    processes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="h-8 w-8 text-gray-600 mr-3" />
          References
        </h3>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Bernier, M. J., & O'Hagan, J. (2008).{" "}
              <em>
                Puppets and emotional development: A practical guide for
                teachers and therapists
              </em>
              . Jessica Kingsley Publishers.
            </p>

            <p>
              Bowlby, J. (1988).{" "}
              <em>
                A secure base: Parent-child attachment and healthy human
                development
              </em>
              . Basic Books.
            </p>

            <p>
              Currell, D. (2008).{" "}
              <em>
                Shadow puppets and shadow play in early learning environments
              </em>
              . Routledge.
            </p>

            <p>
              Goldschmied, E., & Jackson, S. (2004).{" "}
              <em>People under three: Young children in day care</em> (2nd ed.).
              Routledge.
            </p>

            <p>
              Hunt, T., & Renfro, N. (2012).{" "}
              <em>
                Puppetry in early childhood education: A handbook for teachers
              </em>
              . Nancy Renfro Studios.
            </p>

            <p>
              Isbell, R., & Raines, S. (2013).{" "}
              <em>Creativity and the arts with young children</em> (3rd ed.).
              Cengage Learning.
            </p>

            <p>
              Mallett, M. (2009). Young children, picture books and dramatic
              play. <em>Early Child Development and Care, 179</em>(6), 671-684.
            </p>

            <p>
              Wagner, B. J. (2013).{" "}
              <em>Dorothy Heathcote: Drama as a learning medium</em> (Rev. ed.).
              Dimensions Publishing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
