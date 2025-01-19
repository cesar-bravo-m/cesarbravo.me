export default function Poem() {
  return (
    <article className="prose prose-invert lg:prose-xl max-w-none">
      <h1>Poem Title</h1>
      <p className="text-gray-400">March 2024</p>
      
      <div className="space-y-8 text-xl">
        <p className="italic">
          First stanza of the poem...<br />
          Line two of the first stanza...<br />
          Line three of the first stanza...
        </p>

        <p className="italic">
          Second stanza of the poem...<br />
          Line two of the second stanza...<br />
          Line three of the second stanza...
        </p>
      </div>

      <div className="mt-16 text-gray-400">
        <p>Written in Madrid, Spain</p>
      </div>
    </article>
  );
} 