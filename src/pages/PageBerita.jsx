import handleTitle from '../handle/handleTitle';
import BeritaList from '../components/Solution/BeritaList';

function PageBerita() {
  handleTitle('Berita | GreenWaste');
  return (
      <BeritaList />
  );
}

export default PageBerita;
