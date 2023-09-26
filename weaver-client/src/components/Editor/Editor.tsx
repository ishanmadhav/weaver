import { EditorProvider, FloatingMenu, BubbleMenu, Extension, useCurrentEditor, useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '../MenuBar/MenuBar'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import './editor.css'
import { Menu } from '@mui/material'

export default function Editor() {
    const extensions:Extension[] = [
        StarterKit,
      ]
      
      const title:string = 'Demo Document Title'
      const content:string = '<p>Hello World!</p>'

      const editor=useEditor({
        extensions,
        content
      })
  return (
    <div >
        <div className="text-center sticky">
            <span className="hover:bg-gray-200 p-1 cursor-pointer">{title}</span>
            
        </div>

        {editor?<MenuBar editor={editor}/>:<></>}

        <div style={{height: '88vh', overflowY: 'auto'}}>
            <EditorContent editor={editor}/>
        </div>
    </div>
  )
}