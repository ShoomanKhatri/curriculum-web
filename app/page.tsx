import {
  Sparkles,
  Music,
  Palette,
  Drama,
  Calculator,
  BookOpen,
  FlaskConical,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const creativityAreas = [
    { icon: Palette, name: "Art", color: "text-pink-500" },
    { icon: Drama, name: "Drama", color: "text-purple-500" },
    { icon: Users, name: "Movement", color: "text-blue-500" },
    { icon: Music, name: "Music", color: "text-green-500" },
    { icon: FlaskConical, name: "Science", color: "text-orange-500" },
    { icon: Calculator, name: "Math", color: "text-red-500" },
    { icon: BookOpen, name: "Literacy", color: "text-indigo-500" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-3xl p-8 mb-12 text-white">
        <Link href="/">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Facilitating Creativity in the Curriculum
            </h1>
          </div>
        </Link>
        <p className="text-xl text-center max-w-3xl mx-auto">
          Empowering early childhood educators to nurture creative thinking and
          expression across all learning domains
        </p>
      </div>

      {/* Creativity Areas Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
        {creativityAreas.map((area) => {
          const Icon = area.icon;
          return (
            <div
              key={area.name}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <Icon className={`h-8 w-8 mb-2 ${area.color}`} />
              <span className="text-sm font-medium text-gray-700">
                {area.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          The Importance of Fostering Creativity in Early Childhood Curriculum
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-lg mb-6">
            Creativity is not merely an artistic endeavor—it is a fundamental
            cognitive process that enhances learning across all domains of early
            childhood education. When we facilitate creativity in the
            curriculum, we provide children with essential tools for
            problem-solving, critical thinking, and self-expression that will
            serve them throughout their lives.
          </p>

          <p className="mb-6">
            In the realm of <strong>art</strong>, creativity allows children to
            explore colors, textures, and forms while developing fine motor
            skills and spatial awareness. Through painting, drawing, sculpting,
            and collage work, young learners express their inner worlds and make
            sense of their experiences. Art activities encourage risk-taking and
            experimentation, teaching children that there are multiple ways to
            approach and solve problems.
          </p>

          <p className="mb-6">
            <strong>Drama and movement</strong> activities provide powerful
            outlets for creative expression while supporting language
            development, emotional regulation, and social skills. When children
            engage in dramatic play, they practice perspective-taking, develop
            empathy, and learn to communicate effectively. Movement activities
            integrate physical development with creative expression, helping
            children understand their bodies in space while exploring rhythm,
            tempo, and dynamics.
          </p>

          <p className="mb-6">
            <strong>Music</strong> naturally fosters creativity through
            improvisation, composition, and interpretation. Musical experiences
            enhance mathematical thinking through pattern recognition and
            counting, while supporting language development through rhythm,
            rhyme, and melody. When children create their own songs or interpret
            familiar tunes in new ways, they develop confidence in their ability
            to innovate and express themselves.
          </p>

          <p className="mb-6">
            Perhaps surprisingly, <strong>science and mathematics</strong> offer
            rich opportunities for creative thinking. Scientific inquiry
            encourages children to hypothesize, experiment, and draw
            conclusions—all creative processes. When children design
            experiments, build structures, or explore natural phenomena, they
            engage in creative problem-solving. Mathematics becomes creative
            when children discover patterns, create their own counting games, or
            find multiple solutions to problems.
          </p>

          <p className="mb-6">
            <strong>Literacy</strong> development flourishes when approached
            creatively. Storytelling, creative writing, and dramatic
            interpretation of literature help children understand narrative
            structure while expressing their own ideas. When children create
            their own books, act out stories, or engage in wordplay, they
            develop both technical literacy skills and creative confidence.
          </p>

          <p className="mb-6">
            The integration of creativity across all curriculum areas supports
            holistic development. Creative experiences help children develop
            executive function skills, including flexible thinking, working
            memory, and inhibitory control. These skills are essential for
            academic success and lifelong learning.
          </p>

          <p>
            By facilitating creativity in our early childhood curricula, we
            honor children's natural curiosity and imagination while building
            the foundation for innovative thinking. We prepare them not just to
            consume knowledge, but to create, question, and contribute
            meaningfully to their world. This approach recognizes that
            creativity is not a luxury in education—it is an essential component
            of comprehensive child development.
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Palette className="h-8 w-8 text-pink-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">
              Explore Art Activities
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Discover age-appropriate art experiences and creative theories that
            support artistic development.
          </p>
          <a
            href="/art"
            className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700"
          >
            Learn More →
          </a>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Drama className="h-8 w-8 text-purple-500 mr-3" />
            <h3 className="text-xl font-bold text-gray-800">
              Drama & Puppetry
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Explore dramatic play activities and puppetry experiences that
            enhance imaginative thinking.
          </p>
          <a
            href="/drama-puppetry"
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
          >
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}
