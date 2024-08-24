import React,{useState} from 'react';
import {Form, useNavigate} from 'react-router-dom';

import {preview} from "../assets";
import {getRandomPrompt} from '../utils';
import { FormField , Loader} from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form,setForm] = useState({
    name:"",
    prompt:"",
    photo:"",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section className='max-w-7xl mx-auto'>
    <div>
    <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create imagination and visuallystunning images
          through IMAGE-GEN-AI and share them with the community
        </p>
      </div>
    </div>
    </section>
  )
}

export default CreatePost