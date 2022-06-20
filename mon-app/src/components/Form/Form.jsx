import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/api';
import { useSelector } from 'react-redux';
import './Form.css'
import Model from '../model/Model';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function Form(props) {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    const [exec, setExec] = useState("");
    useEffect(() => {
        console.log(exec);
        setExec(transcript)
        if (exec.includes("open") && exec.includes("model"))
        {
            
            setIsOpen(true)
            setExec("")
        }
        

    }, [transcript])
    const [isOpen, setIsOpen] = useState(false);
    
    const dispatch = useDispatch()
    
    const handleSubmit = () =>{
        SpeechRecognition.startListening() ;
    }
  return (
    <div>
        <div className='form-group'>
            <button onClick={handleSubmit}>
                Start
            </button>
        </div>
    <Model isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>     

  )
}
