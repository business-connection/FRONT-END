import styled from 'styled-components';


const SignupPage4 = ({ setStep, verificationStatus, setVerificationStatus }) => {
	return (
		<div>

				<div>
					<label htmlFor="verificationCode">인증번호</label>
					<input 
						type="text" 
						id="verificationCode" 
						maxLength="6" 
						placeholder="인증번호 6자리 입력"
						onChange={(e) => {
							if (e.target.value === "123456") {
								setVerificationStatus(true);
							} else {
								setVerificationStatus(false);
							}
						}}
					/>
					{verificationStatus ? (
						<p style={{ color: '#2E7D32', margin: '4px 0' }}>
							코드가 일치해요
						</p>
					) : (
						<p style={{ color: '#D32F2F', margin: '4px 0' }}>
							코드가 일치하지 않아요
						</p>
					)}
					<button>재전송</button>
				</div>
				<div>
					<span>남은 시간: 3:00</span>
				</div>

			<button 
				onClick={() => verificationStatus && setStep(5)}
				disabled={!verificationStatus}
				style={{
					color: verificationStatus ? '#007bff' : '#cccccc',
					cursor: verificationStatus ? 'pointer' : 'not-allowed'
				}}
			>
				다음으로
			</button>
		</div>
	);
};

export default SignupPage4;
