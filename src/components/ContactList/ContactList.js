import { Ul, Li, Button } from './ContactList.styled.js';
import { CgTrash } from 'react-icons/cg';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <Ul>
    {contacts.map(contact => (
      <Li key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <Button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            <CgTrash size={20} />
          </Button>
        }
      </Li>
    ))}
  </Ul>
);
