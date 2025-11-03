import { ref } from 'vue'
import { codeToHtml } from 'shiki'

export const useShiki = () => {
  const highlightCode = async (code: string, isDark: boolean = false) => {
    try {
      // Use Material Theme Ocean - deep ocean blue background with vibrant colors
      const theme = 'material-theme-ocean'
      
      const html = await codeToHtml(code, {
        lang: 'javascript',
        theme: theme,
        transformers: [
          {
            line(node, line) {
              // Add line numbers with green neon glow matching portfolio theme
              node.children.unshift({
                type: 'element',
                tagName: 'span',
                properties: {
                  class: 'line-number',
                  style: 'user-select: none; margin-right: 1.5rem; display: inline-block; width: 1.5rem; text-align: right;'
                },
                children: [{ type: 'text', value: String(line) }]
              })
            }
          }
        ]
      })
      return html
    } catch (error) {
      console.error('Shiki highlighting error:', error)
      // Fallback to plain text with pre tag
      return `<pre style="color: #d4d4d4; font-family: monospace; padding: 2rem;">${code}</pre>`
    }
  }

  return {
    highlightCode
  }
}

