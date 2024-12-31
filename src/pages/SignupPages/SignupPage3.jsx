import styled from 'styled-components';
import SignupNextButton from '../../components/SignupNextButton';
import ssnDash from '../../assets/loginIcon/ssn_dash.svg';
import { useState } from 'react';

const InputLabel = styled.label`
	align-self: stretch;
	color: var(--Colors-GrayScale-G500, #4F5462);
	font-family: "SUIT Variable";
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 168%;
	letter-spacing: -0.35px;
	margin-top: 28px;
	display: block;
`;

const StyledInput = styled.input`
    display: flex;
    width: 400px;
    height: 48px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    background: var(--Colors-GrayScale-G200, #F3F5F8);
    box-shadow: 0px 0px 8px 0px rgba(26, 26, 35, 0.12) inset;
    border: none;
    font-family: "SUIT Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.4px;
    margin-top: 8px;

    &::placeholder {
        color: var(--Colors-GrayScale-G400, #949BAD);
        font-family: "SUIT Variable";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.4px;
        vertical-align: middle;
		transform: translateY(1px);
    }
`;

const SSNWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const SSNStyledInput = styled(StyledInput)`
	width: 184px;
	letter-spacing: 3px;
`;

const SelectAgency = styled.select`
	display: flex;
	width: 400px;
	height: 48px;
	padding: 12px 16px;
	align-items: center;
	gap: 8px;
	align-self: stretch;
	border-radius: 12px;
	background: var(--Colors-GrayScale-G200, #F3F5F8);
	box-shadow: 0px 0px 8px 0px rgba(26, 26, 35, 0.12) inset;
	border: none;
	font-family: "SUIT Variable";
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 150%;
	letter-spacing: -0.4px;
	color: var(--Colors-GrayScale-G400, #949BAD);
	cursor: pointer;
	appearance: none;
	background-image: url('/src/assets/loginIcon/arrow_down.svg');
	background-repeat: no-repeat;
	background-position: right 16px center;
	background-size: 16px;

	&:not(:placeholder-shown) {
		color: var(--Colors-GrayScale-G900, #949BAD);
	}

	&:has(option[value]:checked:not([value=""])) {
		color: var(--Colors-GrayScale-G900, #1A1A23);
	}
`;

const StyledSignupNextButton = styled(SignupNextButton)`
	margin-top: 52px;
`;


const SignupPage3 = ({ setStep }) => {
	const [name, setName] = useState('');
	const [ssn1, setSsn1] = useState('');
	const [ssn2, setSsn2] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [agency, setAgency] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleSsn1Change = (e) => {
		const value = e.target.value.replace(/[^\d]/g, '');
		setSsn1(value);
	};

	const handleSsn2Change = (e) => {
		const value = e.target.value.replace(/[^\d]/g, '');
		setSsn2(value);
	};

	const handlePhoneNumberChange = (e) => {
		const value = e.target.value;
		const formattedValue = value
			.replace(/[^\d-]/g, '')
			.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
		setPhoneNumber(formattedValue);
	};

	const isFormValid = 
		name.length > 0 && 
		ssn1.length === 6 && 
		ssn2.length === 7 && 
		phoneNumber.length === 13 &&
		agency !== '';

	return (
		<div>
			<form>
				<div>
					<InputLabel htmlFor="name">이름</InputLabel>
					<StyledInput 
						type="text" 
						id="name" 
						placeholder="이름(실명)을 입력해주세요"
						value={name}
						onChange={handleNameChange}
					/>
				</div>
				
				<div>
					<InputLabel htmlFor="ssn">주민등록번호</InputLabel>
					<SSNWrapper>
						<SSNStyledInput 
							type="text" 
							id="ssn1" 
							maxLength="6" 
							placeholder="앞 6자리"
							value={ssn1}
							onChange={handleSsn1Change}
						/>
						<img src={ssnDash} alt="ssn-dash" />
						<SSNStyledInput 
							type="password" 
							id="ssn2" 
							maxLength="7" 
							placeholder="뒤 7자리"
							value={ssn2}
							onChange={handleSsn2Change}
						/>
					</SSNWrapper>
				</div>

				<div>
					<InputLabel>통신사</InputLabel>
					<SelectAgency 
						value={agency} 
						onChange={(e) => setAgency(e.target.value)}
						defaultValue=""
					>
						<option value="" disabled>통신사 선택</option>
						<option value="skt">SKT</option>
						<option value="kt">KT</option>
						<option value="lgu">LG U+</option>
						<option value="알뜰폰">알뜰폰 SKT</option>
						<option value="알뜰폰">알뜰폰 KT</option>
						<option value="알뜰폰">알뜰폰 LG U+</option>
					</SelectAgency>
				</div>

				<div>
					<InputLabel htmlFor="phone">휴대폰 번호</InputLabel>
					<StyledInput 
						type="tel" 
						id="phone" 
						placeholder="010-1234-5678" 
						maxLength="13"
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
					/>
				</div>
			</form>

			<StyledSignupNextButton 
				onClick={() => setStep(4)} 
				disabled={!isFormValid}
			>
				인증하기
			</StyledSignupNextButton>
		</div>
	);
};

export default SignupPage3;
