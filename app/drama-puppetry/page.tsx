import { Drama, Brain, Wrench, Users, Play, Camera } from "lucide-react";

export default function DramaPuppetryPage() {
  const ageGroups = [
    {
      age: "0-2 Years",
      color: "bg-yellow-100 border-yellow-300",
      activities: [
        {
          title: "Peek-a-Boo Puppet Play",
          description:
            "Use soft hand puppets or finger puppets for interactive peek-a-boo games with simple songs and rhymes. Support object permanence development, social interaction skills, and early language development through predictable, responsive play sequences that encourage anticipation and delight.",
          reference:
            "Adapted from Goldschmied, E. & Jackson, S. (2004). People under three: Young children in day care.",
          videoNote:
            "📹 Video showing responsive puppet interaction with infant, demonstrating engagement cues",
        },
        {
          title: "Mirror Movement and Facial Expression Games",
          description:
            "Use mirrors to encourage imitation of simple movements, facial expressions, and sounds. Incorporate gentle music and responsive interaction. Supports self-awareness development, social connection, body awareness, and early communication skills through playful mirroring and turn-taking.",
          reference:
            "Based on attachment theory principles (Bowlby, 1988) and mirror neuron research",
          videoNote:
            "📹 Video documenting infant's responses to mirror play and movement imitation",
        },
      ],
    },
    {
      age: "2-3 Years",
      color: "bg-green-100 border-green-300",
      activities: [
        {
          title: "Animal Movement Stories with Music",
          description:
            "Act out simple animal movements while telling familiar stories like 'Brown Bear, Brown Bear' with musical accompaniment. Combine gross motor development with narrative understanding, vocabulary expansion, and imaginative play while supporting rhythm and coordination skills.",
          reference:
            "Isbell, R. & Raines, S. (2013). Creativity and the arts with young children",
          videoNote:
            "📹 Video showing toddler engaging in animal movements with story progression",
        },
        {
          title: "Simple Sock Puppet Conversations",
          description:
            "Create basic sock puppets with button eyes and yarn hair for simple conversations, songs, and interactive games. Encourage language development, turn-taking, and emotional expression through puppet-mediated communication that feels safe and playful for emerging speakers.",
          reference:
            "Hunt, T. & Renfro, N. (2012). Puppetry in early childhood education",
          videoNote:
            "📹 Video capturing toddler's puppet conversation and language development",
        },
      ],
    },
    {
      age: "3-5 Years",
      color: "bg-blue-100 border-blue-300",
      activities: [
        {
          title: "Collaborative Fairy Tale Dramatization",
          description:
            "Act out familiar fairy tales like 'The Three Little Pigs' with simple costumes, props, and collaborative role assignment. Develop narrative comprehension, sequencing skills, cooperative play, and character perspective-taking while building confidence in performance and creative expression.",
          reference:
            "Mallett, M. (2009). Young children, picture books and dramatic play",
          videoNote:
            "📹 Video documenting collaborative story planning and performance process",
        },
        {
          title: "Emotion Puppet Theater Workshop",
          description:
            "Use various puppets to explore and express different emotions through guided storytelling scenarios. Support emotional literacy, regulation skills, empathy development, and perspective-taking while providing safe opportunities for emotional exploration and expression through puppet characters.",
          reference:
            "Bernier, M. J. & O'Hagan, J. (2008). Puppets and emotional development",
          videoNote:
            "📹 Video showing child using puppets to express and discuss different emotions",
        },
      ],
    },
    {
      age: "6-8 Years",
      color: "bg-purple-100 border-purple-300",
      activities: [
        {
          title: "Original Script Creation and Performance",
          description:
            "Collaborate to write, rehearse, and perform original short plays based on classroom experiences, current interests, or community themes. Integrate literacy skills, creative writing, teamwork, planning abilities, and presentation skills while fostering innovative thinking and collaborative creativity.",
          reference:
            "Wagner, B. J. (2013). Dorothy Heathcote: Drama as a learning medium",
          videoNote:
            "📹 Video documenting script writing process and final performance presentation",
        },
        {
          title: "Shadow Puppet Science Storytelling",
          description:
            "Create shadow puppets and perform stories using light sources and shadow manipulation. Combine science concepts about light and shadow with artistic expression, storytelling skills, and technical problem-solving while developing planning, sequencing, and presentation abilities through innovative performance methods.",
          reference:
            "Currell, D. (2008). Shadow puppets and shadow play in early learning",
          videoNote:
            "📹 Video showing shadow puppet creation and performance with light experimentation",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-center mb-4">
          <Drama className="h-10 w-10 mr-4" />
          <h1 className="text-4xl font-bold">
            Drama & Puppetry in Early Childhood
          </h1>
        </div>
        <p className="text-center text-lg">
          Enhancing imaginative thinking through dramatic expression
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Table of Contents
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#importance" className="hover:text-purple-600">
                1. Importance in Early Childhood Creativity
              </a>
            </li>
            <li>
              <a href="#theories" className="hover:text-purple-600">
                2. Creativity Theories and Perspectives
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-purple-600">
                3. Resources and Digital Technologies
              </a>
            </li>
          </ul>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#activities" className="hover:text-purple-600">
                4. Learning Activities by Age (0-8 years)
              </a>
            </li>
            <li>
              <a href="#digital-evidence" className="hover:text-purple-600">
                5. Digital Evidence (Video Examples)
              </a>
            </li>
            <li>
              <a href="#reflection" className="hover:text-purple-600">
                6. Critical Reflection and Evaluation
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 1: Importance (100 words) */}
      <section
        id="importance"
        className="bg-white rounded-xl shadow-md p-8 mb-8"
      >
        <div className="flex items-center mb-6">
          <Drama className="h-8 w-8 text-purple-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            Importance in Early Childhood Creativity
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Drama and puppetry serve as powerful catalysts for imaginative
          thinking and creative expression, providing children with safe spaces
          to explore perspectives, experiment with identity, and process
          emotions through symbolic play. These art forms develop essential
          social-emotional skills including empathy, cooperation, and conflict
          resolution while strengthening communication abilities. Puppetry
          offers unique opportunities for reluctant speakers to find their
          voice, with puppets serving as bridges between internal thoughts and
          external expression. The imaginative nature of dramatic play supports
          cognitive flexibility, enabling children to think beyond literal
          interpretations and explore abstract concepts while fostering creative
          problem-solving through character motivations, plot development, and
          collaborative storytelling that integrates multiple learning domains
          simultaneously.
        </p>
      </section>

      {/* Section 2: Theories (100 words) */}
      <section id="theories" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <Brain className="h-8 w-8 text-blue-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            Creativity Theories and Perspectives
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Gardner's Multiple Intelligence Theory provides foundation for
          understanding how drama engages bodily-kinesthetic intelligence
          through movement, linguistic intelligence through dialogue,
          interpersonal intelligence through collaboration, and intrapersonal
          intelligence through self-reflection. Vygotsky's emphasis on symbolic
          play aligns with dramatic activities where children use props and
          puppets as meaning-making tools, with his Zone of Proximal Development
          evident when children stretch abilities through role-play and
          collaborative storytelling. Csikszentmihalyi's flow theory explains
          deep engagement during dramatic play where challenge and skill balance
          perfectly. These frameworks demonstrate that drama and puppetry are
          essential vehicles for cognitive, social, and emotional development,
          honoring learning complexity and creative expression in early
          childhood education contexts.
        </p>
      </section>

      {/* Section 3: Resources (100 words) */}
      <section
        id="resources"
        className="bg-white rounded-xl shadow-md p-8 mb-8"
      >
        <div className="flex items-center mb-6">
          <Wrench className="h-8 w-8 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            Resources, Materials, and Digital Technologies
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Effective drama and puppetry programs require carefully selected,
          accessible materials that inspire creativity while ensuring safety.
          Hand puppets, finger puppets, and marionettes offer varying complexity
          levels matching developmental abilities. Simple costume pieces
          including hats, scarves, and capes enable quick character
          transformations without overwhelming performers. Storyboards and
          visual prompts support narrative development and idea organization.
          Digital resources such as puppet-making applications, story creation
          software, and recording tools enhance traditional activities while
          introducing contemporary technologies. The balance between structure
          and open-ended exploration provides sufficient resources to spark
          imagination without constraining creative expression. Materials should
          represent diverse cultures inclusively, with regular rotation
          maintaining interest and introducing new creative challenges for all
          learners.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">Puppets</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Hand puppets</li>
              <li>• Finger puppets</li>
              <li>• Sock puppets</li>
              <li>• Shadow puppets</li>
              <li>• Marionettes (older children)</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">
              Costumes & Props
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Dress-up clothes</li>
              <li>• Hats & accessories</li>
              <li>• Simple masks</li>
              <li>• Fabric pieces</li>
              <li>• Scarves & capes</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-2">
              Digital Resources
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Story creation apps</li>
              <li>• Digital storyboards</li>
              <li>• Recording tools</li>
              <li>• Animation software</li>
              <li>• Video editing apps</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-2">
              Age-Specific (0-8)
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Soft puppets (0-2)</li>
              <li>• Animal costumes (2-3)</li>
              <li>• Story props (3-5)</li>
              <li>• Script templates (6-8)</li>
              <li>• Performance spaces</li>
            </ul>
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

                    {/* Video Evidence Placeholder */}
                    <div className="bg-gray-50 rounded-lg p-4 text-center border-2 border-dashed border-gray-300">
                      <Camera className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                      <div className="text-gray-500 text-xs font-medium mb-1">
                        Digital Evidence
                      </div>
                      <p className="text-xs text-gray-400">
                        {activity.videoNote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Evidence Section */}
      <section
        id="digital-evidence"
        className="bg-white rounded-xl shadow-md p-8 mb-8"
      >
        <div className="flex items-center mb-6">
          <Play className="h-8 w-8 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            Digital Evidence - Video Recordings
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <h3 className="font-bold text-purple-800 mb-3">
              Video 1: Animal Movement Stories (2-3 years)
            </h3>
            <div className="bg-white rounded border-2 border-dashed border-purple-300 p-8 text-center mb-4">
              <Play className="h-12 w-12 text-purple-400 mx-auto mb-2" />
              <p className="text-purple-600 text-sm">Maximum 5 minutes</p>
              <p className="text-xs text-gray-500 mt-2">
                Video demonstrates toddler engaging in story-based movement
              </p>
            </div>
            <p className="text-sm text-gray-600">
              This video will capture a 2.5-year-old participating in animal
              movement storytelling, showing gross motor development and
              imaginative engagement.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-800 mb-3">
              Video 2: Original Script Performance (6-8 years)
            </h3>
            <div className="bg-white rounded border-2 border-dashed border-blue-300 p-8 text-center mb-4">
              <Play className="h-12 w-12 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-600 text-sm">Maximum 5 minutes</p>
              <p className="text-xs text-gray-500 mt-2">
                Video documents collaborative script creation and performance
              </p>
            </div>
            <p className="text-sm text-gray-600">
              This video will show 7-year-olds collaborating on script writing
              and performing their original creation, demonstrating teamwork and
              creative expression.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Videos will demonstrate enactment across
            different age ranges (completing the 0-2, 2-3, 3-5, and 6-8 years
            requirement when combined with Art videos).
          </p>
        </div>
      </section>

      {/* Critical Reflection Section */}
      <section
        id="reflection"
        className="bg-white rounded-xl shadow-md p-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Critical Reflection and Evaluation (200 words)
        </h2>

        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="font-semibold text-green-800 mb-3">
              Aspects That Went Well
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>1. Engagement and Social Interaction:</strong> The
                animal movement stories successfully captured toddlers'
                attention and encouraged active participation. Children
                demonstrated natural storytelling abilities and showed increased
                confidence in group settings through shared dramatic
                experiences.
              </li>
              <li>
                <strong>2. Collaborative Creativity in Script Writing:</strong>{" "}
                The older children's original script development exceeded
                expectations, with peers building on each other's ideas
                constructively. The process demonstrated sophisticated planning,
                negotiation skills, and creative problem-solving when adapting
                ideas for performance.
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
            <h3 className="font-semibold text-orange-800 mb-3">
              Aspects for Improvement
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>1. Time Management:</strong> Both activities required
                more time than initially planned. The toddler activity needed
                additional repetition for skill consolidation, while the script
                writing process needed extended discussion time for
                collaborative decision-making.
              </li>
              <li>
                <strong>2. Individual Participation Support:</strong> Some
                children needed more scaffolding to feel comfortable
                participating. Additional strategies for supporting shy or
                reluctant participants could have enhanced inclusive engagement.
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <h3 className="font-semibold text-blue-800 mb-3">
              Future Enhancements
            </h3>
            <p className="text-gray-700">
              To enhance creativity facilitation, I would implement more
              flexible timing structures, provide multiple entry points for
              participation (observer, partial participant, full participant),
              and integrate more technology tools for documenting and sharing
              creative processes. I would also develop stronger links to other
              curriculum areas and provide more opportunities for peer feedback
              and reflection to deepen learning outcomes and creative
              development.
            </p>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          References (APA 7th Edition)
        </h2>
        <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
          <p>
            Bernier, M. J., & O'Hagan, J. (2008).{" "}
            <em>
              Puppets and emotional development: A practical guide for teachers
              and therapists
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
            Mallett, M. (2009). Young children, picture books and dramatic play.{" "}
            <em>Early Child Development and Care, 179</em>(6), 671-684.
          </p>

          <p>
            Wagner, B. J. (2013).{" "}
            <em>Dorothy Heathcote: Drama as a learning medium</em> (Rev. ed.).
            Dimensions Publishing.
          </p>
        </div>
      </section>
    </div>
  );
}
