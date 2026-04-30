const modal = document.getElementById('purchaseModal');
const buyBtn = document.getElementById('buyBtn');
const closeBtn = document.querySelector('.close');
const downloadBtn = document.getElementById('downloadBtn');

buyBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = 'none';
  }

  downloadBtn.onclick = () => {
    const email = document.getElementById('emailInput').value;
      if (!email || !email.includes('@')) {
          alert('Please enter a valid email');
              return;
                }
                  
                    const link = document.createElement('a');
                      link.href = 'data:text/plain,Thank you for purchasing from Inkflow!';
                        link.download = 'Inkflow-Ebook.txt';
                          link.click();
                            
                              modal.style.display = 'none';
                                alert('Download started!');
                                }