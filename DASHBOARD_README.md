# RTRW Dashboard - Setup Guide

## Backend Integration

Dashboard ini telah diintegrasikan dengan Laravel backend API (Malixl/rtrw-be).

### API Endpoints

Dashboard menggunakan endpoint berikut:

#### Authentication
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user
- `GET /api/me` - Get current user info

#### Wilayah (Regions)
- `GET /api/wilayah` - Get all regions (supports pagination & search)
- `GET /api/wilayah/{id}` - Get single region
- `POST /api/wilayah` - Create region
- `PUT /api/wilayah/{id}` - Update region
- `DELETE /api/wilayah/{id}` - Delete region
- `POST /api/wilayah/multi-destroy` - Delete multiple regions

#### Pola Ruang (Spatial Patterns)
- `GET /api/polaruang` - Get all spatial patterns
- `GET /api/polaruang/{id}` - Get single spatial pattern
- `POST /api/polaruang` - Create spatial pattern
- `PUT /api/polaruang/{id}` - Update spatial pattern
- `DELETE /api/polaruang/{id}` - Delete spatial pattern
- `POST /api/polaruang/multi-destroy` - Delete multiple

#### RTRW (Spatial Planning Documents)
- `GET /api/rtrw` - Get all RTRW documents
- `GET /api/rtrw/{id}` - Get single document
- `POST /api/rtrw` - Create document
- `PUT /api/rtrw/{id}` - Update document
- `DELETE /api/rtrw/{id}` - Delete document
- `POST /api/rtrw/multi-destroy` - Delete multiple

#### Klasifikasi (Classifications)
- `GET /api/klasifikasi` - Get all classifications
- `GET /api/klasifikasi/{id}` - Get single classification
- `POST /api/klasifikasi` - Create classification
- `PUT /api/klasifikasi/{id}` - Update classification
- `DELETE /api/klasifikasi/{id}` - Delete classification
- `POST /api/klasifikasi/multi-destroy` - Delete multiple

### Configuration

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure API URL in `.env`:
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api
   ```

3. Update the URL to match your Laravel backend URL.

### Features Implemented

#### 1. Dashboard Page (`/dashboard`)
- **Statistics Cards**: Displays total count for Wilayah, Pola Ruang, RTRW, and Klasifikasi
- **Recent Activities**: Shows latest entries from RTRW and Wilayah
- **Quick Actions**: Direct links to manage each entity
- **Real-time Data**: Fetches data from backend API on load

#### 2. Wilayah Management (`/dashboard/wilayah`)
- **Data Table**: Paginated table with search functionality
- **CRUD Operations**: Create, Read, Update, Delete regions
- **Form Validation**: Required fields validation
- **Responsive Design**: Works on all devices

#### 3. Pola Ruang Management (`/dashboard/polaruang`)
- Full CRUD operations for spatial patterns
- Search and pagination
- Modal forms for create/edit

#### 4. RTRW Documents Management (`/dashboard/rtrw`)
- Manage RTRW planning documents
- Fields: Nama, Nomor Perda, Tahun, Keterangan
- Full CRUD with search and pagination

#### 5. Klasifikasi Management (`/dashboard/klasifikasi`)
- Manage classification data
- CRUD operations with validation
- Searchable and paginated table

### File Structure

```
src/
├── services/
│   ├── api.js                    # Axios instance with auth interceptor
│   ├── auth.service.js           # Authentication service
│   ├── wilayah.service.js        # Wilayah API calls
│   ├── polaruang.service.js      # Pola Ruang API calls
│   ├── rtrw.service.js           # RTRW API calls
│   └── klasifikasi.service.js    # Klasifikasi API calls
│
├── pages/
│   ├── DashboardPage.jsx         # Main dashboard with statistics
│   └── dashboard/
│       ├── WilayahPage.jsx       # Wilayah CRUD page
│       ├── PolaruangPage.jsx     # Pola Ruang CRUD page
│       ├── RtrwPage.jsx          # RTRW CRUD page
│       └── KlasifikasiPage.jsx   # Klasifikasi CRUD page
│
└── components/
    └── templates/
        └── DashboardLayout.jsx   # Dashboard layout with sidebar
```

### Authentication

The API service automatically:
- Adds Bearer token to all requests (from localStorage)
- Redirects to login page on 401 Unauthorized
- Stores token on successful login
- Clears token on logout

### Data Fields

Based on backend structure, each entity should have these fields:

**Wilayah:**
- `nama` - Region name (required)
- `kode` - Region code (required)
- `keterangan` - Description (optional)

**Pola Ruang:**
- `nama` - Pattern name (required)
- `kode` - Code (required)
- `keterangan` - Description (optional)

**RTRW:**
- `nama` - Document name (required)
- `nomor_perda` - Regulation number (optional)
- `tahun` - Year (optional)
- `keterangan` - Description (optional)

**Klasifikasi:**
- `nama` - Classification name (required)
- `kode` - Code (required)
- `keterangan` - Description (optional)

### Usage

1. Start your Laravel backend
2. Set the API URL in `.env`
3. Run the frontend: `npm run dev`
4. Login through `/login`
5. Access dashboard at `/dashboard`

### Notes

- Dashboard statistics are calculated by fetching all data (without pagination)
- Tables support pagination and search through backend API
- All forms include validation
- Responsive design works on mobile, tablet, and desktop
- Clean, modern UI using Ant Design components
- Consistent color scheme (primary blue) across all pages
