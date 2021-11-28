import Section from './componets/Section/Section'
import Phonebook from "./componets/Phone/Phonebook";
import Contacts from './componets/Contacts/Contects';
import Filter from './componets/Filter/Filter'
function App () {

    return(

<div>
<Section title='Phonebook'>
<Phonebook  />
</Section>

<Section title='Contacts'>
<Filter />
  <Contacts />
</Section>
</div>
  )};

export default App

