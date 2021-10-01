const Modal = ({ text }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<h2 className="text-xl">
					{' '}
					<span>{text}</span>
				</h2>
			</div>
		</div>
	);
};

export default Modal;
