const Profile = () => {
	return (
		<section className="profile-card" aria-label="User profile">
			<div className="profile-avatar" aria-hidden="true">AM</div>
			<div className="profile-details">
				<strong>Mcmc Reaembonanza</strong>
				<span>Focused planner</span>
			</div>
			<button className="profile-menu" type="button" aria-label="Open profile menu">•••</button>
		</section>
	);
};

export default Profile;
