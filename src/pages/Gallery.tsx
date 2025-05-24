
import React, { useState } from 'react';
import { Image as ImageIcon, Calendar, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import AnimatedImage from '../components/AnimatedImage';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: ImageIcon },
    { id: 'campus', name: 'Campus Life', icon: Users },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'academics', name: 'Academics', icon: BookOpen },
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'photo-1581091226825-a6a2a5aee158',
      title: 'Modern Computer Lab',
      category: 'academics',
      description: 'State-of-the-art computer laboratory with latest equipment'
    },
    {
      id: 2,
      image: 'photo-1488590528505-98d2b5aba04b',
      title: 'Programming Class',
      category: 'academics',
      description: 'Students engaged in hands-on programming session'
    },
    {
      id: 3,
      image: 'photo-1649972904349-6e44c42644a7',
      title: 'Digital Library',
      category: 'campus',
      description: 'Well-equipped digital library for research and study'
    },
    {
      id: 4,
      image: 'photo-1526374965328-7f61d4dc18c5',
      title: 'Tech Symposium 2024',
      category: 'events',
      description: 'Annual technology symposium with industry experts'
    },
    {
      id: 5,
      image: 'photo-1506744038136-46273834b3fb',
      title: 'Cultural Festival',
      category: 'events',
      description: 'Vibrant cultural celebrations and student performances'
    },
    {
      id: 6,
      image: 'photo-1501854140801-50d01698950b',
      title: 'Campus Garden',
      category: 'campus',
      description: 'Beautiful green spaces for relaxation and recreation'
    },
    {
      id: 7,
      image: 'photo-1581091226825-a6a2a5aee158',
      title: 'Project Presentation',
      category: 'academics',
      description: 'Students presenting their final year projects'
    },
    {
      id: 8,
      image: 'photo-1488590528505-98d2b5aba04b',
      title: 'Coding Competition',
      category: 'events',
      description: 'Inter-college coding competition winners'
    },
    {
      id: 9,
      image: 'photo-1649972904349-6e44c42644a7',
      title: 'Study Group',
      category: 'campus',
      description: 'Collaborative learning and peer study sessions'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 dark:from-black dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-slide-in-right">
              Explore our vibrant campus life, academic excellence, and memorable moments through our photo gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <AnimatedImage
                    src={item.image}
                    alt={item.title}
                    className="h-64"
                    hoverEffect="zoom"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No images found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try selecting a different category to view more images.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Highlights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Special moments and achievements from our college community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Campus Infrastructure
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our modern campus features state-of-the-art facilities including advanced computer labs, 
                digital libraries, spacious auditoriums, and recreational areas designed to enhance 
                the overall learning experience.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Computer Labs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Auditoriums</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">1</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Digital Library</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Classrooms</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <AnimatedImage
                src="photo-1581091226825-a6a2a5aee158"
                alt="Campus building"
                className="h-48 rounded-xl"
                hoverEffect="scale"
              />
              <AnimatedImage
                src="photo-1488590528505-98d2b5aba04b"
                alt="Computer lab"
                className="h-48 rounded-xl"
                hoverEffect="float"
              />
              <div className="col-span-2">
                <AnimatedImage
                  src="photo-1649972904349-6e44c42644a7"
                  alt="Library"
                  className="h-32 rounded-xl"
                  hoverEffect="zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
