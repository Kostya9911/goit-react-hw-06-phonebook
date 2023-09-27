import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ onDelete, contacts }) => {
  return (
    <ol className={css.oll}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactItem
              onDelete={() => {
                onDelete(id);
              }}
              name={name}
              number={number}
            />
          </li>
        );
      })}
    </ol>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
