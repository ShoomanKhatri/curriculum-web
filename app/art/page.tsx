import { Palette, Lightbulb, Wrench, Users } from "lucide-react"

export default function ArtPage() {
  const ageGroups = [
    {
      age: "0-2 Years",
      color: "bg-yellow-100 border-yellow-300",
      activities: [
        {
          title: "Sensory Paint Exploration",
          description:
            "Provide non-toxic finger paints in primary colors. Allow infants to explore texture and color through touch, encouraging sensory development and cause-and-effect understanding.",
        },
        {
          title: "Natural Material Collage",
          description:
            "Offer large leaves, flower petals, and smooth stones for supervised exploration. Support fine motor development while introducing natural textures and colors.",
        },
      ],
    },
    {
      age: "2-3 Years",
      color: "bg-green-100 border-green-300",
      activities: [
        {
          title: "Big Brush Painting",
          description:
            "Provide large brushes and washable paints on easels. Encourage whole-arm movements and color mixing while developing hand-eye coordination and creative expression.",
        },
        {
          title: "Playdough Sculptures",
          description:
            "Offer homemade playdough with simple tools like cookie cutters and rolling pins. Support three-dimensional thinking and strengthen hand muscles for future writing skills.",
        },
      ],
    },
    {
      age: "3-5 Years",
      color: "bg-blue-100 border-blue-300",
      activities: [
        {
          title: "Mixed Media Self-Portraits",
          description:
            "Combine drawing, painting, and collage materials for self-representation. Encourage identity exploration while developing planning and decision-making skills.",
        },
        {
          title: "Nature Printing Workshop",
          description:
            "Use leaves, flowers, and objects to create prints with paint or ink. Integrate science observation with artistic creation, fostering environmental awareness.",
        },
      ],
    },
    {
      age: "6-8 Years",
      color: "bg-purple-100 border-purple-300",
      activities: [
        {
          title: "Digital Art Creation",
          description:
            "Introduce simple digital art apps on tablets. Combine traditional art concepts with technology, encouraging innovation and digital literacy skills.",
        },
        {
          title: "Community Mural Project",
          description:
            "Collaborate on a large-scale artwork representing classroom community. Develop teamwork, planning, and perspective-taking while creating meaningful shared art.",
        },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-center mb-4">
          <Palette className="h-10 w-10 mr-4" />
          <h1 className="text-4xl font-bold">Art in Early Childhood</h1>
        </div>
        <p className="text-center text-lg">Fostering creativity through visual arts experiences</p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-gray-600">
          <li>
            <a href="#value" className="hover:text-purple-600">
              1. The Value of Art in Early Childhood
            </a>
          </li>
          <li>
            <a href="#theories" className="hover:text-purple-600">
              2. Creativity Theories and Art
            </a>
          </li>
          <li>
            <a href="#materials" className="hover:text-purple-600">
              3. Materials and Technologies
            </a>
          </li>
          <li>
            <a href="#experiences" className="hover:text-purple-600">
              4. Learning Experiences by Age
            </a>
          </li>
          <li>
            <a href="#references" className="hover:text-purple-600">
              5. References
            </a>
          </li>
        </ul>
      </div>

      {/* Section 1: Value of Art */}
      <section id="value" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Palette className="h-8 w-8 text-pink-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">The Value of Art in Early Childhood Creativity</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Art serves as a fundamental vehicle for creative expression in early childhood, providing children with
          opportunities to communicate ideas, emotions, and experiences that may be difficult to express through words
          alone. Through artistic exploration, young learners develop critical thinking skills as they make decisions
          about color, form, and composition. The creative process inherent in art-making encourages risk-taking and
          experimentation, fostering resilience and adaptability. Art experiences support cognitive development by
          engaging multiple senses simultaneously, strengthening neural pathways essential for learning. Furthermore,
          artistic activities promote fine motor development, spatial awareness, and visual-perceptual skills that form
          the foundation for academic success. When children engage in art, they learn to observe carefully, think
          symbolically, and express their unique perspectives, building confidence in their ability to create and
          innovate.
        </p>

        {/* Video Placeholder */}
        <div className="mt-6 bg-gray-100 rounded-lg p-8 text-center">
          <div className="text-gray-500 mb-2">📹 Video Evidence Placeholder</div>
          <p className="text-sm text-gray-600">Space reserved for embedded video examples of art activities</p>
        </div>
      </section>

      {/* Section 2: Creativity Theories */}
      <section id="theories" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Creativity Theories Related to Art</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Vygotsky's sociocultural theory emphasizes the importance of social interaction in creative development,
          suggesting that children's artistic abilities flourish through collaborative experiences and guided
          participation with more knowledgeable others. His concept of the Zone of Proximal Development applies directly
          to art education, where teachers scaffold creative experiences to support individual growth. Piaget's
          constructivist theory highlights how children actively construct understanding through hands-on exploration,
          making art a perfect medium for cognitive development. His stages of development inform age-appropriate art
          activities, recognizing that young children think concretely and benefit from sensory-rich experiences.
          Contemporary research in neuroscience supports these theories, demonstrating that artistic activities activate
          multiple brain regions simultaneously, promoting neural connectivity and creative thinking. The integration of
          these theoretical frameworks guides educators in creating meaningful art experiences that honor children's
          developmental needs while fostering creative expression and cognitive growth.
        </p>
      </section>

      {/* Section 3: Materials and Technologies */}
      <section id="materials" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Wrench className="h-8 w-8 text-blue-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Materials and Technologies for Art Education</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Effective art education requires a thoughtful selection of materials that support creative exploration while
          ensuring safety and accessibility. Traditional materials such as non-toxic paints, crayons, markers, and clay
          provide foundational experiences in color, texture, and form. Natural materials including leaves, stones,
          shells, and flowers connect children to their environment while offering unique textures and patterns.
          Recycled materials like cardboard tubes, fabric scraps, and bottle caps encourage resourcefulness and
          environmental awareness. Digital technologies, including child-friendly art apps and interactive whiteboards,
          introduce contemporary tools while maintaining focus on creative expression. The key is providing diverse
          materials that accommodate different learning styles, developmental levels, and cultural backgrounds. Quality
          materials that respond predictably to children's actions build confidence and encourage continued exploration.
          Teachers should regularly rotate materials to maintain interest and introduce new creative challenges while
          ensuring all children have equitable access to artistic tools and resources.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold text-pink-700 mb-2">Traditional Materials</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Non-toxic paints & brushes</li>
              <li>• Crayons & markers</li>
              <li>• Clay & playdough</li>
              <li>• Paper varieties</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">Natural Materials</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Leaves & flowers</li>
              <li>• Stones & shells</li>
              <li>• Sand & soil</li>
              <li>• Wood pieces</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Digital Tools</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Drawing apps</li>
              <li>• Digital cameras</li>
              <li>• Interactive displays</li>
              <li>• 3D modeling tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Learning Experiences */}
      <section id="experiences" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Users className="h-8 w-8 text-purple-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">Learning Experiences by Age Group</h2>
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

      {/* References Section */}
      <section id="references" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">References</h2>
        <div className="text-gray-600 space-y-2 text-sm">
          <p>
            <em>References will be formatted in APA 7th edition style:</em>
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>
              Author, A. A. (Year). Title of work. <em>Publisher</em>.
            </p>
            <p>
              Author, B. B. (Year). Title of article. <em>Journal Name, Volume</em>(Issue), pages.
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
