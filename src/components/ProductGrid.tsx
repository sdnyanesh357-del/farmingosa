import React, { useState } from 'react';
import { useLocale } from '../hooks/use-locale';
import { Product } from '../types';
import { productsData } from '../lib/products-data';
import { MessageSquare, ChevronLeft, ChevronRight, Check, Table, Info, X } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { locale, t } = { ...useLocale() };
  const [activeImg, setActiveImg] = useState(0);

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImg((prev) => (prev + 1) % product.images.length);
  };

  const name = locale === 'hi' ? product.nameHi : product.nameEn;
  const desc = locale === 'hi' ? product.descriptionHi : product.descriptionEn;
  const features = locale === 'hi' ? product.featuresHi : product.featuresEn;
  const specs = locale === 'hi' ? product.specsHi : product.specsEn;

  return (
    <div 
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full group"
      id={`product-card-${product.id}`}
    >
      {/* Image Carousel Block */}
      <div className="relative h-56 sm:h-64 w-full bg-gray-50 overflow-hidden">
        <img
          src={product.images[activeImg]}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Carousel controls */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-red hover:text-brand-red-hover p-1.5 rounded-full shadow-md z-10"
              aria-label="Previous product image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-red hover:text-brand-red-hover p-1.5 rounded-full shadow-md z-10"
              aria-label="Next product image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Carousel Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImg(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeImg ? 'bg-brand-red w-4' : 'bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`Go to product image ${i + 1}`}
            />
          ))}
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-earth-dark/90 text-white text-[10px] font-bold uppercase tracking-[0.15em] py-1 px-3 rounded-md backdrop-blur-sm">
          {t(product.category as any)}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 hover:text-brand-red transition-colors">
            {name}
          </h3>
          
          <p className="text-sm text-gray-500 font-sans line-clamp-2 mt-2 leading-relaxed">
            {desc}
          </p>

          {/* Quick specs preview (first 3) */}
          <div className="mt-4 border-t border-gray-150 pt-4 space-y-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block">
              {t('specsLabel')}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans font-semibold">
              {Object.entries(specs).slice(0, 3).map(([key, val]) => (
                <div key={key} className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block truncate">{key}</span>
                  <span className="text-gray-900 font-bold truncate block">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key features bullets */}
          <div className="mt-4 space-y-1.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block">
              {t('featuresLabel')}
            </span>
            {features.slice(0, 2).map((feat, index) => (
              <div key={index} className="flex items-start space-x-2 text-xs font-sans font-medium text-gray-600">
                <Check className="h-3.5 w-3.5 text-brand-red mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-4 border-t border-gray-150 space-y-2.5">
          <div className="flex justify-between items-center text-sm">
            <span className="font-bold text-gray-400 uppercase tracking-wider text-xs">
              {t('priceLabel')}
            </span>
            <span className="font-display text-xs font-extrabold text-brand-red bg-brand-red-light px-3 py-1 rounded-full uppercase tracking-wider">
              {product.priceRange}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="flex items-center justify-center space-x-1.5 border border-gray-200 hover:border-brand-red text-gray-700 hover:text-brand-red font-sans font-bold text-[10px] py-3 px-3 rounded-xl transition-all uppercase tracking-wider"
            >
              <Info className="h-3.5 w-3.5" />
              <span>{t('viewDetails')}</span>
            </button>

            <a
              href={`https://wa.me/919999999999?text=${encodeURIComponent(product.whatsAppMsg)}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center space-x-1.5 bg-gradient-accent hover:shadow-lg text-white font-sans font-bold text-[10px] py-3 px-3 rounded-xl transition-all uppercase tracking-wider"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>{locale === 'en' ? 'Enquire' : 'पूछें'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductGrid: React.FC = () => {
  const { locale, t } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: t('allCategories') },
    { id: 'tractors', label: t('tractors') },
    { id: 'implements', label: t('implements') },
    { id: 'seeding', label: t('seeding') },
    { id: 'harvesting', label: t('harvesting') }
  ];

  // Filtering products
  const filteredProducts = productsData.filter((prod) => {
    if (selectedCategory === 'all') return true;
    return prod.category === selectedCategory;
  });

  // Pagination setup (4 items per page as typical default)
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1); // reset to page 1 on category change
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: document.getElementById('catalog-showroom')?.offsetTop || 300, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: document.getElementById('catalog-showroom')?.offsetTop || 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="catalog-showroom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.2em] bg-brand-red-light px-4 py-1.5 rounded-full inline-block">
            {locale === 'en' ? 'OUR FLEET' : 'हमारा बेड़ा'}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            {t('catalogTitle')}
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto my-3 rounded-full"></div>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`font-sans text-xs sm:text-sm font-bold px-5 py-3 rounded-full transition-all border uppercase tracking-wider ${
                selectedCategory === cat.id
                  ? 'bg-brand-red text-white border-brand-red shadow-lg'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8" id="catalog-grid">
          {paginatedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={(prod) => setActiveModalProduct(prod)}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4 mt-12 pt-6 border-t border-gray-100" id="pagination-controls">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center space-x-1 font-sans font-bold text-xs py-2 px-4 rounded-md border transition-colors ${
                currentPage === 1
                  ? 'text-gray-300 border-gray-100 cursor-not-allowed bg-gray-50'
                  : 'text-earth-dark border-gray-200 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>{t('prev')}</span>
            </button>
            
            <span className="text-sm font-bold text-gray-500 font-mono">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center space-x-1 font-sans font-bold text-xs py-2 px-4 rounded-md border transition-colors ${
                currentPage === totalPages
                  ? 'text-gray-300 border-gray-100 cursor-not-allowed bg-gray-50'
                  : 'text-earth-dark border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span>{t('next')}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

      </div>

      {/* Details Modal / Dialog (Radix Dialog substitute in native react with clean styling) */}
      {activeModalProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4" 
          id="product-details-modal"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveModalProduct(null)}
          ></div>

          {/* Modal Container */}
          <div className="relative bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8 animate-fade-in-up">
            {/* Close trigger */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
              aria-label="Close modal dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content header */}
            <div className="space-y-4">
              <span className="inline-block bg-brand-red-light text-brand-red text-[10px] font-bold uppercase tracking-[0.15em] py-1 px-3 rounded-md">
                {t(activeModalProduct.category as any)}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight pr-8">
                {locale === 'hi' ? activeModalProduct.nameHi : activeModalProduct.nameEn}
              </h2>
            </div>

            {/* Spec details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Product Shots */}
              <div className="space-y-3">
                <div className="h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={activeModalProduct.images[0]}
                    alt={activeModalProduct.nameEn}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {activeModalProduct.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-2">
                    {activeModalProduct.images.map((img, i) => (
                      <div key={i} className="h-24 rounded-lg overflow-hidden bg-gray-50">
                        <img 
                          src={img} 
                          alt="spec detail thumbnail" 
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Text, Features & Specs */}
              <div className="space-y-4">
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {locale === 'hi' ? activeModalProduct.descriptionHi : activeModalProduct.descriptionEn}
                </p>

                {/* Specs Table */}
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex items-center space-x-2">
                    <Table className="h-4 w-4 text-brand-red" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-700">
                      {t('specsLabel')}
                    </span>
                  </div>
                  <table className="w-full text-left text-xs font-sans">
                    <tbody>
                      {Object.entries(locale === 'hi' ? activeModalProduct.specsHi : activeModalProduct.specsEn).map(([key, val], index) => (
                        <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-2.5 font-semibold text-gray-500 border-r border-gray-100 w-2/5">
                            {key}
                          </td>
                          <td className="px-4 py-2.5 font-medium text-gray-900">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Features block */}
            <div className="mt-6 border-t border-gray-150 pt-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] block mb-3">
                {t('featuresLabel')}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(locale === 'hi' ? activeModalProduct.featuresHi : activeModalProduct.featuresEn).map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-sm font-sans font-medium text-gray-600">
                    <Check className="h-4 w-4 text-brand-red mt-0.5 shrink-0 bg-brand-red-light rounded-full p-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="mt-8 border-t border-gray-150 pt-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center space-y-4 sm:space-y-0 gap-4">
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {t('priceLabel')}
                </span>
                <span className="font-display text-2xl font-extrabold text-brand-red">
                  {activeModalProduct.priceRange}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="bg-gray-150 hover:bg-gray-200 text-gray-700 font-sans font-bold text-xs py-3 px-6 rounded-xl transition-all uppercase tracking-wider"
                >
                  {t('close')}
                </button>
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(activeModalProduct.whatsAppMsg)}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-accent text-white font-sans font-bold text-xs py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-wider"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{t('whatsAppInquiry')}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
