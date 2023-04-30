import { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx';

import CodeOfConduct from '../documents/code-of-conduct.md';

const CodeOfConductPage = () => {

  const [cocText, setCocText] = useState('')

  console.log(CodeOfConduct);

  // Fetch Terms of Use
	useEffect(() => {
		fetch(CodeOfConduct).then(res => res.text()).then(text => setCocText(text))
	})

    return (
        <div >
        <section className="container px-6 py-8 mx-auto lg:py-16">
          <div>
          <Markdown
            options={{
                overrides: {
                    h1: {
                      props: {
                          className: 'text-2xl font-semibold text-gray-700 capitalize',
                      },
                    },
                    h2: {
                      props: {
                          className: 'text-xl font-semibold text-gray-700 capitalize',
                      },
                    }
                },
            }}
            children={cocText} 
          />
        </div>
        </section>

        </div>
    );
};
export default CodeOfConductPage;


