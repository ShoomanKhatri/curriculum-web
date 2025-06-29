import { Drama, Brain, Wrench, Users } from "lucide-react"

export default function DramaPuppetryPage() {
  const ageGroups = [
    {
      age: "0-2 Years",
      color: "bg-yellow-100 border-yellow-300",
      activities: [
        {
          title: "Peek-a-Boo Puppet Play",
          description:
            "Use simple hand puppets or finger puppets for interactive peek-a-boo games. Support object permanence development while introducing cause-and-effect relationships through playful interaction.",
        },
        {
          title: "Mirror Movement Games",
          description:
            "Encourage imitation of simple movements and facial expressions using mirrors. Develop self-awareness and social connection through responsive movement and gesture.",
        },
      ],
    },
    {
      age: "2-3 Years",
      color: "bg-green-100 border-green-300",
      activities: [
        {
          title: "Animal Movement Stories",
          description:
            "Act out simple animal movements while telling familiar stories. Combine gross motor development with narrative understanding and imaginative play.",
        },
        {
          title: "Sock Puppet Conversations",
          description:
            "Create simple sock puppets for basic conversations and songs. Encourage language development and turn-taking through puppet-mediated interaction.",
        },
      ],
    },
    {
      age: "3-5 Years",
      color: "bg-blue-100 border-blue-300",
      activities: [
        {
          title: "Fairy Tale Dramatization",
          description:
            "Act out familiar fairy tales with simple costumes and props. Develop narrative comprehension, sequencing skills, and collaborative play while exploring character perspectives.",
        },
        {
          title: "Emotion Puppet Theater",
          description:
            "Use puppets to explore and express different emotions through storytelling. Support emotional literacy and regulation while practicing empathy and perspective-taking.",
        },
      ],
    },
    {
      age: "6-8 Years",
      color: "bg-purple-100 border-purple-300",
      activities: [
        {
          title: "Original Script Creation",
          description:
            "Collaborate to write and perform original short plays based on classroom experiences or interests. Integrate literacy skills with creative expression and teamwork.",
        },
        {
          title: "Shadow Puppet Storytelling",
          description:
            "Create shadow puppets and perform stories using light and shadow. Combine science concepts with artistic expression while developing planning and presentation skills.",
        },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-center mb-4">
          <Drama className="h-10 w-10 mr-4" />
          <h1 className="text-4xl font-bold">Drama & Puppetry</h1>
        </div>
        <p className="text-center text-lg">Enhancing imaginative thinking through dramatic expression</p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-gray-600">
          <li>
            <a href="#value" className="hover:text-purple-600">
              1. Drama and Puppetry for Imaginative Thinking
            </a>
          </li>
          <li>
            <a href="#theories" className="hover:text-purple-600">
              2. Creativity Theories and Drama
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:text-purple-600">
              3. Props and Resources
            </a>
          </li>
          <li>
            <a href="#activities" className="hover:text-purple-600">
              4. Learning Activities by Age
            </a>
          </li>
          <li>
            <a href="#reflection" className="hover:text-purple-600">
              5. Teacher Reflection Space
            </a>
          </li>
          <li>
            <a href="#references" className="hover:text-purple-600">
              6. References
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1: Value of Drama and Puppetry */}
      <section id="value" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Drama className="h-8 w-8 text-purple-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Drama and Puppetry for Imaginative Thinking</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Drama and puppetry serve as powerful catalysts for imaginative thinking and creative expression in early
          childhood education. These art forms provide children with safe spaces to explore different perspectives,
          experiment with identity, and process complex emotions through symbolic play. Through dramatic activities,
          children develop essential social-emotional skills including empathy, cooperation, and conflict resolution
          while strengthening their ability to communicate effectively. Puppetry offers unique opportunities for shy or
          reluctant speakers to find their voice, as the puppet becomes a bridge between internal thoughts and external
          expression. The imaginative nature of dramatic play supports cognitive flexibility, allowing children to think
          beyond literal interpretations and explore abstract concepts. These experiences foster creative
          problem-solving skills as children navigate character motivations, plot development, and collaborative
          storytelling. Furthermore, drama and puppetry integrate multiple learning domains, supporting language
          development, physical coordination, and artistic expression simultaneously while honoring children's natural
          inclination toward imaginative play.
        </p>

        {/* Video Placeholder */}
        <div className="mt-6 bg-gray-100 rounded-lg p-8 text-center">
          <div className="text-gray-500 mb-2">📹 Video Evidence Placeholder</div>
          <p className="text-sm text-gray-600">
            Space reserved for embedded video examples of drama and puppetry activities
          </p>
        </div>
      </section>

      {/* Section 2: Creativity Theories */}
      <section id="theories" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Brain className="h-8 w-8 text-blue-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Creativity Theories and Drama</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Gardner's theory of multiple intelligences provides a strong foundation for understanding how drama and
          puppetry support diverse learning styles and capabilities. Bodily-kinesthetic intelligence is engaged through
          movement and gesture, while linguistic intelligence develops through dialogue and storytelling. Interpersonal
          intelligence flourishes as children collaborate and take on different character perspectives, and
          intrapersonal intelligence grows through self-reflection and emotional exploration. Vygotsky's emphasis on
          symbolic play aligns perfectly with dramatic activities, where children use props, costumes, and puppets as
          tools for meaning-making. His concept of the Zone of Proximal Development is evident when children stretch
          beyond their current abilities through role-play and collaborative storytelling. Csikszentmihalyi's flow
          theory explains the deep engagement children experience during dramatic play, where challenge and skill are
          perfectly balanced. These theoretical frameworks support the understanding that drama and puppetry are not
          merely entertainment but essential vehicles for cognitive, social, and emotional development that honor the
          complexity of human learning and creative expression.
        </p>
      </section>

      {/* Section 3: Props and Resources */}
      <section id="resources" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Wrench className="h-8 w-8 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Props and Resources</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Effective drama and puppetry programs require carefully selected props and resources that inspire creativity
          while remaining accessible and safe for young children. Hand puppets, finger puppets, and marionettes offer
          different levels of complexity and motor skill requirements, allowing teachers to match tools to developmental
          abilities. Simple costume pieces such as hats, scarves, and capes enable quick character transformations
          without overwhelming young performers. Storyboards and visual prompts support narrative development and help
          children organize their creative ideas. Digital resources including puppet-making apps and story creation
          software can enhance traditional activities while introducing contemporary tools. The key is maintaining a
          balance between structure and open-ended exploration, providing enough resources to spark imagination without
          constraining creative expression. Props should be culturally diverse and inclusive, representing various
          backgrounds and experiences. Regular rotation of materials maintains interest and introduces new creative
          challenges while ensuring all children have opportunities to explore different aspects of dramatic expression
          through accessible, engaging resources.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">Puppets</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Hand puppets</li>
              <li>• Finger puppets</li>
              <li>• Sock puppets</li>
              <li>• Shadow puppets</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Costumes & Props</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Dress-up clothes</li>
              <li>• Hats & accessories</li>
              <li>• Simple masks</li>
              <li>• Fabric pieces</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">Digital Resources</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Story creation apps</li>
              <li>• Digital storyboards</li>
              <li>• Recording tools</li>
              <li>• Animation software</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Learning Activities */}
      <section id="activities" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Users className="h-8 w-8 text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Learning Activities by Age Group</h2>
        </div>

        <div className="space-y-8">
          {ageGroups.map((group, index) => (
            <div key={index} className={`border-2 rounded-xl p-6 ${group.color}`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{group.age}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {group.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">{activity.title}</h4>
                    <p className="text-gray-600 text-sm">{activity.description}</p>

                    {/* Video placeholder for each activity */}
                    <div className="mt-3 bg-gray-50 rounded p-3 text-center">
                      <div className="text-gray-400 text-xs">📹 Video Example</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Reflection Section */}
      <section id="reflection" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Teacher Reflection Space</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Reflection Prompts:</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• How did children respond to different puppet characters and dramatic scenarios?</li>
            <li>• What evidence did you observe of creative thinking and problem-solving during activities?</li>
            <li>• How did drama and puppetry support language development and social interaction?</li>
            <li>• What adaptations were needed to support diverse learners and abilities?</li>
            <li>• How might you extend these activities to integrate other curriculum areas?</li>
          </ul>

          <div className="mt-6 bg-white p-4 rounded border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-sm italic">Space for teacher notes and observations...</p>
            <div className="h-32"></div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">References</h2>
        <div className="text-gray-600 space-y-2 text-sm">
          <p>
            <em>References will be formatted in APA 7th edition style:</em>
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>
              Gardner, H. (Year). <em>Multiple intelligences theory and applications</em>. Publisher.
            </p>
            <p>
              Vygotsky, L. S. (Year). <em>Play and its role in child development</em>. Publisher.
            </p>
            <p>
              Author, C. C. (Year). Drama in early childhood education. <em>Journal Name, Volume</em>(Issue), pages.
            </p>
            <p>
              <em>[Additional references to be added based on specific theoretical sources and research cited]</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
