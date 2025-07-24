"use client";

import Image from "next/image";
import {
  FlaskConical,
  Brain,
  BookOpen,
  Users,
  Clock,
  FileText,
  Home,
  Sparkles,
  List as ListIcon,
  Lightbulb,
  Award,
  Target,
  Palette,
  Calculator,
  Leaf,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function SciencePage() {
  // Table of Contents
  const tableOfContents = [
    {
      number: "1",
      title: "Introduction to Science in ECEC",
      href: "#introduction",
      icon: FlaskConical,
    },
    {
      number: "2",
      title: "Importance of Science Exploration",
      href: "#importance",
      icon: Brain,
    },
    {
      number: "3",
      title: "Theoretical Foundations",
      href: "#theories",
      icon: BookOpen,
    },
    {
      number: "4",
      title: "Resources & Environment",
      href: "#resources",
      icon: Leaf,
    },
    {
      number: "5",
      title: "Age-Appropriate Science Activities",
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

  // Age groups with science activity timelines
  const ageGroups = [
    {
      age: "0-2 Years",
      timeline: [
        "Exploring water play with cups and containers",
        "Observing light and shadow with flashlights",
        "Touching and smelling natural objects (leaves, flowers)",
        "Rolling balls and watching movement",
        "Simple cause-and-effect experiments (drop, splash, roll)",
      ],
    },
    {
      age: "2-3 Years",
      timeline: [
        "Sorting objects by color, size, or shape",
        "Mixing safe kitchen ingredients (baking soda & vinegar)",
        "Exploring magnets and metal objects",
        "Observing insects and plants outdoors",
        "Building simple ramps and testing objects",
      ],
    },
    {
      age: "3-5 Years",
      timeline: [
        "Planting seeds and observing growth",
        "Making predictions and testing ideas",
        "Exploring floating and sinking with water tubs",
        "Simple weather observations (clouds, rain, sun)",
        "Recording findings with drawings or photos",
      ],
    },
    {
      age: "6-8 Years",
      timeline: [
        "Designing simple experiments (what melts fastest?)",
        "Exploring animal habitats and lifecycles",
        "Building and testing bridges or towers",
        "Investigating chemical reactions (safe kitchen science)",
        "Using magnifiers and simple tools for observation",
      ],
    },
  ];

  // Timeline icon rotation
  const getTimelineIcon = (index: number) => {
    const icons = [FlaskConical, Lightbulb, Leaf, Globe, CheckCircle, Sparkles];
    return icons[index % icons.length];
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-green-400 via-blue-400 to-yellow-300 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <FlaskConical className="h-12 w-12 mr-4 animate-spin-slow" />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Science in Early Childhood
            </h1>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Inspiring curiosity, investigation, and discovery through hands-on
            science experiences
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
          <FlaskConical className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Introduction to Science in ECEC
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg text-justify">
              Science in early childhood education is about nurturing children's
              natural curiosity and sense of wonder. Through hands on
              exploration, children learn to ask questions, make predictions,
              and investigate the world around them. Science experiences in ECEC
              lay the foundation for lifelong learning, critical thinking, and
              problem-solving skills.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Everyday moments like watching a bug crawl, mixing colors, or
              feeling the wind are opportunities for scientific discovery.
              Educators play a vital role in creating environments that
              encourage observation, experimentation, and joyful learning.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://www.the74million.org/wp-content/uploads/2022/09/kids_science_class.jpg"
              alt="Children exploring science outdoors with magnifying glasses"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Every child is a natural scientist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Science Exploration */}
      <section
        id="importance"
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-8 mb-8 border border-blue-100"
      >
        <div className="flex items-center mb-6">
          <Brain className="h-10 w-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Importance of Science Exploration
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <FlaskConical className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Inquiry Skills
            </h4>
            <p className="text-gray-600">
              Children learn to ask questions, make predictions, and test ideas
              through hands-on science
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Lightbulb className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Critical Thinking
            </h4>
            <p className="text-gray-600">
              Science fosters observation, reasoning, and problem-solving skills
              essential for lifelong learning
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
              <Users className="h-10 w-10 text-yellow-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              Collaboration
            </h4>
            <p className="text-gray-600">
              Working together on science projects builds communication and
              teamwork skills
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Science exploration in early childhood is not about memorizing
            facts, but about developing a mindset of curiosity and discovery.
            These experiences help children become confident learners who are
            eager to explore, experiment, and understand their world.
          </p>
        </div>
      </section>

      {/* Theoretical Foundations */}
      <section
        id="theories"
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-6">
          <BookOpen className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Theoretical Foundations
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
                  <strong>Constructivism:</strong> Children build knowledge
                  through active exploration
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Stages of Development:</strong> Science activities
                  match children's cognitive stages
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-3">•</span>
                <div>
                  <strong>Hands-On Learning:</strong> Manipulating materials
                  deepens understanding
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Inquiry-Based Learning
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Questioning:</strong> Children are encouraged to ask
                  and investigate their own questions
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Process Over Product:</strong> Focus on exploration,
                  not just outcomes
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <div>
                  <strong>Documentation:</strong> Recording observations and
                  discoveries
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://www.ednewsdaily.com/wp-content/uploads/2022/11/image-1-660x400.jpg"
            alt="Children conducting science experiments with magnifiers and natural materials"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h4 className="text-xl font-semibold mb-2">Learning by Doing</h4>
            <p className="text-sm leading-relaxed">
              The best science learning happens through active, hands-on
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Resources & Environment */}
      <section
        id="resources"
        className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-8 mb-8 border border-green-100"
      >
        <div className="flex items-center mb-6">
          <Leaf className="h-10 w-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Resources & Environment
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <Image
              src="https://www.ednewsdaily.com/wp-content/uploads/2022/11/image-1-660x400.jpg"
              alt="Science center with natural materials, magnifiers, and discovery tools"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">
                Inviting spaces spark scientific curiosity
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FlaskConical className="h-6 w-6 text-green-600 mr-3" />
                Science Tools
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Magnifying glasses and bug viewers</li>
                <li>• Measuring cups, droppers, and scales</li>
                <li>• Natural materials (rocks, leaves, shells)</li>
                <li>• Water tables and sand trays</li>
                <li>• Simple microscopes and binoculars</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Leaf className="h-6 w-6 text-yellow-600 mr-3" />
                Outdoor Exploration
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Nature walks and garden spaces</li>
                <li>• Weather observation stations</li>
                <li>• Collections of leaves, seeds, and insects</li>
                <li>• Outdoor water and sand play areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Science Activities */}
      <section
        id="activities"
        className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-indigo-100"
      >
        <div className="flex items-center mb-6">
          <Users className="h-10 w-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Age-Appropriate Science Activities
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Infants & Toddlers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔬</span>
                <span>Water play and sensory exploration</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔬</span>
                <span>Exploring light, shadow, and sound</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">🔬</span>
                <span>Touching and smelling natural objects</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Preschoolers
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔬</span>
                <span>Simple experiments with kitchen ingredients</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔬</span>
                <span>Sorting and classifying objects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🔬</span>
                <span>Observing plants and insects outdoors</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developmental Timelines */}
      <section
        id="timelines"
        className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl shadow-lg p-8 mb-8 border border-yellow-100"
      >
        <div className="flex items-center mb-8">
          <Clock className="h-10 w-10 text-yellow-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Developmental Timelines
          </h2>
        </div>
        <div className="space-y-8">
          {ageGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100"
            >
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">
                {group.age}
              </h3>
              <div className="grid gap-4">
                {group.timeline.map((activity, index) => {
                  const IconComponent = getTimelineIcon(index);
                  return (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="bg-yellow-600 rounded-full p-3 mr-4 flex-shrink-0">
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
        className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-pink-100"
      >
        <div className="flex items-center mb-6">
          <FileText className="h-10 w-10 text-pink-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">
            Critical Reflection
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-pink-600 mr-3" />
                Inclusive Science
              </h3>
              <p className="text-gray-700 leading-relaxed">
                How can we ensure that science activities are accessible and
                meaningful for children of all backgrounds and abilities?
                Consider adaptations, multiple entry points, and honoring
                diverse ways of knowing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lightbulb className="h-6 w-6 text-yellow-600 mr-3" />
                Documentation & Assessment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What are meaningful ways to document children's scientific
                thinking and discoveries? How do we capture the process, not
                just the product?
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://www.ednewsdaily.com/wp-content/uploads/2022/11/image-1-660x400.jpg"
              alt="Children collaborating on science projects with diverse materials"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">Science is for everyone</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed text-lg">
            Reflecting on our science teaching practices helps us create more
            inclusive, engaging, and effective learning experiences for all
            children. By valuing curiosity, experimentation, and diverse
            perspectives, we nurture the next generation of scientists and
            problem-solvers.
          </p>
        </div>
      </section>

      {/* References */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="h-8 w-8 text-gray-600 mr-3" />
          References
        </h3>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Piaget, J. (1972). <em>The psychology of the child</em>. Basic
              Books.
            </p>
            <p>
              Worth, K., & Grollman, S. (2003).{" "}
              <em>Discovering science with young children</em>. Redleaf Press.
            </p>
            <p>
              Australian Children's Education and Care Quality Authority.
              (2020). <em>National Quality Standard</em>. ACECQA.
            </p>
            <p>
              National Science Teachers Association. (2014).{" "}
              <em>Position statement: Early childhood science education</em>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
