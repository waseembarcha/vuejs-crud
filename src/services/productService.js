import db from '@/db/firebaseConfig'
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const productsCollection = collection(db, 'products')

/**
 * Fetch all products from Firestore
 * @returns {Promise<Array>} Array of products with their Firestore document IDs
 */
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(productsCollection)
    const products = []

    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data()
      })
    })

    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

/**
 * Fetch a single product by ID
 * @param {string} productId - The Firestore document ID
 * @returns {Promise<Object|null>} Product object or null if not found
 */
export const getProductById = async (productId) => {
  try {
    const docRef = doc(db, 'products', productId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    throw error
  }
}

/**
 * Add a new product
 * @param {Object} productData - Product data object
 * @returns {Promise<string>} The ID of the newly added product
 */
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsCollection, productData)
    return docRef.id
  } catch (error) {
    console.error('Error adding product:', error)
    throw error
  }
}

/**
 * Update an existing product
 * @param {string} productId - The Firestore document ID
 * @param {Object} productData - Updated product data
 * @returns {Promise<void>}
 */
export const updateProduct = async (productId, productData) => {
  try {
    const docRef = doc(db, 'products', productId)
    await updateDoc(docRef, productData)
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}

/**
 * Delete a product
 * @param {string} productId - The Firestore document ID
 * @returns {Promise<void>}
 */
export const deleteProduct = async (productId) => {
  try {
    const docRef = doc(db, 'products', productId)
    await deleteDoc(docRef)
  } catch (error) {
    console.error('Error deleting product:', error)
    throw error
  }
}
