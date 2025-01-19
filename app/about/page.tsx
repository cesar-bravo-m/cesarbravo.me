export default function About() {
  return (
    <div className="prose lg:prose-xl">
      <h1>About Me</h1>
      
      <p>
        Hi! I'm a software developer with a passion for building user-friendly
        applications and sharing knowledge through writing.
      </p>

      <h2>Background</h2>
      <p>
        I have X years of experience in software development, specializing in
        web technologies. My journey in tech started when...
      </p>

      <h2>Skills</h2>
      <ul>
        <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
        <li>Backend: Node.js, Express, PostgreSQL</li>
        <li>Tools: Git, Docker, AWS</li>
      </ul>

      <h2>Interests</h2>
      <p>
        Outside of coding, I enjoy reading tech blogs, contributing to open-source
        projects, and staying up-to-date with the latest web development trends.
      </p>

      <h2>Contact</h2>
      <p>
        Feel free to reach out to me on{' '}
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        {' '}or{' '}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </div>
  )
} 