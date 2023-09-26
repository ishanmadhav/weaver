import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import './menubar.css'
import { useCurrentEditor } from '@tiptap/react';

const iconStyles={
    fontSize: "20px",
}

const selectedIconStyles={
    fontSize: "20px",
    backgroundColor: 'lightblue'
}

const nonselectedStyles={
    fontSize: "16px",
}

const selectedStyles={
    fontSize: "16px",
    backgroundColor: 'lightblue'
}


interface MenuBarProps {
    editor:any
}

export default function MenuBar({editor}:MenuBarProps) {

    

    const handleBoldClick = () => {
        editor.chain().focus().toggleBold().run()

    }
    const handleItalicClick = () => {
        editor.chain().focus().toggleItalic().run()
    }

    const handleH1Click = () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run()
    }

    const handleH2Click = () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run()
    }

  return (
    <div className='my-2'>
        <FormatBoldIcon onClick={handleBoldClick} sx={editor.isActive('bold')?selectedIconStyles:iconStyles} className="hover:bg-gray-200 mx-1 cursor-pointer"/>
        <FormatItalicIcon onClick={handleItalicClick} sx={iconStyles} className="hover:bg-gray-200 mx-1 cursor-pointer"/>   
        <span className='hover:bg-gray-200 mx-1 cursor-pointer pb-1 font-bold' style={editor.isActive('heading', { level: 1 })?selectedStyles:nonselectedStyles} onClick={handleH1Click}>H1</span>
        <span className='hover:bg-gray-200 mx-1 cursor-pointer font-bold' onClick={handleH2Click} style={editor.isActive('heading', { level: 2 })?selectedStyles:nonselectedStyles}>H2</span>
    </div>
  )
}