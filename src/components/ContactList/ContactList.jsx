import React from 'react';
import styles from './ContactList.module.css';
import { FaUser, FaPhone, FaTrashAlt } from 'react-icons/fa';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <FaUser className={styles.icon} />
          <span className={styles.contactName}>{name}</span>
          <FaPhone className={styles.icon} />
          <span className={styles.contactNumber}>{number}</span>
          <button
            className={styles.deleteButton}
            onClick={() => onDeleteContact(id)}
          >
            <FaTrashAlt className={styles.icon} />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
