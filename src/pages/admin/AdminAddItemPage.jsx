// src/pages/admin/AdminListItemPage.jsx
import React, { useState, useEffect } from 'react';
import './AdminListItem.css'; // Menggunakan file CSS baru

// --- Komponen Ikon ---
const AddIcon = () => ( <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 4.58331V17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4.58331 11H17.4166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> );
const RemoveIcon = () => ( <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> );
const EditImageIcon = () => ( <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.474 5.408L18.592 7.526M17.836 3.542L12.103 9.275C11.813 9.565 11.61 9.942 11.522 10.358L11 13L13.642 12.478C14.058 12.39 14.435 12.187 14.725 11.897L20.458 6.164C21.356 5.266 21.356 3.842 20.458 2.944L18.056 0.542C17.158 -0.356 15.734 -0.356 14.836 0.542L10.3 5.074" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M19 15V18C19 19.1046 18.1046 20 17 20H6C4.89543 20 4 19.1046 4 18V7C4 5.89543 4.89543 5 6 5H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> );

// --- Data Simulasi untuk Item Toko ---
const initialShopItems = [
  {
    id: 1,
    title: 'SAMPLE BOOK',
    type: 'E-Book', // 'E-Book' or 'Buku Fisik'
    category: 'Philosophy',
    author: 'Ardhianzy',
    language: 'Indonesia',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
    price: '100000',
    link: 'http//www.linkecommerce.com',
    image: 'https://placehold.co/257x364/222222/FFF?text=Sample+Book'
  },
  {
    id: 2,
    title: 'Item Toko 2',
    type: 'Buku Fisik',
    category: '',
    author: '',
    language: '',
    description: '',
    price: '',
    link: '',
    image: ''
  }
];

// --- Komponen Form untuk satu item ---
const ItemForm = ({ item, onUpdate, onImageUpload }) => {
    // State lokal untuk form agar tidak langsung mengubah state utama
    const [formData, setFormData] = useState(item);

    useEffect(() => {
        setFormData(item);
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Nanti bisa ditambahkan fungsi onUpdate untuk menyimpan perubahan secara live jika perlu
    };
    
    const handleTypeChange = (e) => {
        const { value } = e.target;
        setFormData(prev => ({ ...prev, type: value }));
    };

    if (!item) return null;

    return (
        <div className="item-form-container">
            <div className="item-form-details">
                {/* Judul */}
                <div className="form-field">
                    <label>Judul</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </div>
                {/* Jenis */}
                <div className="form-field">
                    <label>Jenis</label>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="radio" id={`type-ebook-${item.id}`} name={`type-${item.id}`} value="E-Book" checked={formData.type === 'E-Book'} onChange={handleTypeChange} />
                            <label htmlFor={`type-ebook-${item.id}`}>E-Book (Media digital)</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" id={`type-fisik-${item.id}`} name={`type-${item.id}`} value="Buku Fisik" checked={formData.type === 'Buku Fisik'} onChange={handleTypeChange} />
                            <label htmlFor={`type-fisik-${item.id}`}>Buku Media cetak/ Merchandise</label>
                        </div>
                    </div>
                </div>
                {/* Kategori */}
                <div className="form-field"><label>Kategori</label><input type="text" name="category" value={formData.category} onChange={handleChange} /></div>
                {/* Author */}
                <div className="form-field"><label>Author</label><input type="text" name="author" value={formData.author} onChange={handleChange} /></div>
                {/* Bahasa */}
                <div className="form-field"><label>Bahasa (buku)</label><input type="text" name="language" value={formData.language} onChange={handleChange} /></div>
                {/* Deskripsi */}
                <div className="form-field"><label>Deskripsi</label><textarea name="description" value={formData.description} onChange={handleChange} rows="4"></textarea></div>
                {/* Harga */}
                <div className="form-field"><label>Harga</label><input type="text" name="price" value={formData.price} onChange={handleChange} /></div>
                {/* Link eCommerce */}
                <div className="form-field"><label>Link eCommerce</label><input type="text" name="link" value={formData.link} onChange={handleChange} /></div>
            </div>
            <div className="item-form-image">
                <img src={formData.image || 'https://placehold.co/257x364/222222/FFF?text=No+Image'} alt={formData.title} />
                <button className="edit-image-btn"><EditImageIcon /></button>
            </div>
        </div>
    );
};


export default function AdminListItemPage() {
  const [items, setItems] = useState(initialShopItems);
  const [selectedItemId, setSelectedItemId] = useState(1);

  const selectedItem = items.find(item => item.id === selectedItemId);

  const handleAddNewItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const newItem = {
        id: newId,
        title: `Shop ${newId}`,
        type: 'E-Book',
        category: '', author: '', language: '', description: '', price: '', link: '', image: ''
    };
    setItems([...items, newItem]);
    setSelectedItemId(newId);
  };

  return (
    <div className="list-item-page">
      <div className="list-item-actions">
        <button className="action-btn"><AddIcon /><span>Add</span></button>
        <button className="action-btn"><RemoveIcon /><span>Remove</span></button>
        <button className="action-btn save-btn"><span>Save</span></button>
      </div>

      <div className="items-wrapper">
        {items.map(item => (
          <div key={item.id} className={`shop-item ${selectedItemId === item.id ? 'selected' : ''}`}>
            <div className="shop-item-header" onClick={() => setSelectedItemId(item.id)}>
              <span className="shop-item-title">Shop {item.id}</span>
            </div>
            {selectedItemId === item.id && (
              <ItemForm item={selectedItem} />
            )}
          </div>
        ))}
      </div>
      
      <button className="add-fab" onClick={handleAddNewItem}><AddIcon /></button>
    </div>
  );
}
