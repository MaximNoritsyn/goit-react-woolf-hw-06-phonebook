import { useSelector } from 'react-redux';
import css from './list.module.css';
import { ContactItem } from '../contact/item';


export const ContactList = () => {
    const { contacts } = useSelector(state => state.contacts);
    const { filter } = useSelector(state => state.filter);
    
    const filteredContacts = () => {
        if (!contacts) {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        }
        return contacts;
    }

    return (
        <ul className={css.list}>
            {filteredContacts().map(contact => (<ContactItem key={contact.id} contact={contact}/>))}
        </ul>
    );
}