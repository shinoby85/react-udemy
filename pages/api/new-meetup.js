export default function hundler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const {title, image, address, description} = data;
  }
}