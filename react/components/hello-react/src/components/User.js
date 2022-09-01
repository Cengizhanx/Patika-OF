import PropTypes from "prop-types";

function User({ name, surname, age, isLogged, friends, address }) {

    if (!isLogged) {
        return <div>Giriş Yapmadınız</div>
    }

    return (
        <>
            <h1>{`${name} ${surname} ${age}`}</h1>
            {address.title} {address.zip} <br /><br />
            {
                friends && friends.map((friend, index) => (
                    <div key={index}>
                        {friend.name}
                    </div>
                ))}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    }),
    friends: PropTypes.array,
}

User.defaultProps = {
    name: "İsimsiz",
    isLogged: false
}

export default User;