"use client"
import { Highlight, themes, type Language, type RenderProps } from "prism-react-renderer"

interface CodeBlockProps {
  code: string
  language: Language
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <Highlight theme={themes.nightOwl} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }: RenderProps) => (
        <pre className={`${className} p-4 rounded-md overflow-x-auto`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

