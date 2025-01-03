import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Library from './components/Library';
import VideoLibrary from './components/VideoLibrary';

function App() {
  return (
    <Layout>
      <div className="space-y-12">
        <Hero />
        <Library />
        <VideoLibrary />
      </div>
    </Layout>
  );
}

export default App;