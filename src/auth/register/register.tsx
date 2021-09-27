import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/header/header';
import './register.css';

import Button from '../../components/button/button';

function Register() {
	const [form, setForm] = useState({
		nickname: "",
	});

	const [disabled, setDisabled] = useState(false);
	const [isForbiddenError, setForbiddenError] = useState(false);
	const [isRegisted, setRegisted] = useState(false);
	const { nickname } = form;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setDisabled(true);
		e.preventDefault();
		await new Promise((r) => setTimeout(r, 1000));
		try {
			await axios.post(`http://localhost:5000/auth/register`, {
				'nickname' : nickname,
			}, {
				withCredentials: true
			}).then(response => {
				console.log("registered!");
				setRegisted(true);
			})
		}catch (error) { //forbidden (already existed user)
			console.log("error! redirect to main.")
			setForbiddenError(true);
		}
		setForm({
		  nickname: '',
		});
		setDisabled(false);
	};

	//to cleanup function
	useEffect(() => {
		return () => {
			setForbiddenError(false);
			setRegisted(false);
		}
	}, []);

	if (isForbiddenError) return (<Redirect to={{pathname: "/"}}/>);
	if (isRegisted) return (<Redirect to={{pathname: "/main"}}/>);

	return (
		<>
      <Header isLoggedIn={false}/>
      <div className="register">
        <div className="register_title">이름을 알고싶어요.</div>
        <form className="register_form" onSubmit={handleSubmit}>
          <input className="nickname" name="nickname" type="text" value={nickname} onChange={handleChange} placeholder="닉네임은 무엇인가요?" />
          <div className="register_description">
            닉네임은 한번 결정하면 변경할 수 없으니 신중하게 결정해주세요.
          </div>
          {/* <Button title="submit" onClick={()=>{}}/> */}
          <button className="submit" type="submit" disabled={disabled}>등록</button>
        </form>
      </div>
		</>
	);
}

export default Register; 