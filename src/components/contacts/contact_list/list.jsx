import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './list.module.css';
import { ContactItem } from '../contact/item';


export const ContactList = () => {

    const [contactList, setContactList] = useState([]);

    const { contacts } = useSelector(state => state.contacts);
    const { filter } = useSelector(state => state.filter);
    
    useEffect(() => {
        setContactList(contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())));
    }, [contacts, filter]);

    return (
        <ul className={css.list}>
            {contactList.map(contact => (<ContactItem key={contact.id} contact={contact}/>))}
        </ul>
    );
}