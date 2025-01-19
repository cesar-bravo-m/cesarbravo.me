export default function BlogPost() {
  return (
    <article className="prose lg:prose-xl">
      <h1>Getting Started with Next.js</h1>
      <p className="text-gray-600">Published on March 15, 2024</p>
      
      <p>
        Next.js has emerged as one of the most popular frameworks for building React applications.
        In this post, we&apos;ll explore why Next.js is a great choice for your next project and how
        to get started with it.
      </p>

      <h2>Why Next.js?</h2>
      <p>
        Next.js provides several key features that make it an excellent choice for building
        modern web applications:
      </p>
      <ul>
        <li>Server-side rendering out of the box</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>File-based routing</li>
        <li>Built-in optimization features</li>
      </ul>

      <h2>Setting Up Your First Next.js Project</h2>
      <p>
        Getting started with Next.js is straightforward. You can create a new project using:
      </p>
      <pre><code>npx create-next-app@latest my-blog</code></pre>

      <p>
        This command sets up everything you need to start building your application,
        including TypeScript support and basic project structure.
      </p>

      <h2>Conclusion</h2>
      <p>
        Next.js makes it easy to build modern web applications with React. Its extensive
        feature set and excellent developer experience make it a great choice for projects
        of any size.
      </p>
    </article>
  )
} 