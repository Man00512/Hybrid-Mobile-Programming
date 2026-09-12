import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'produk',
    loadChildren: () => import('./pages/produk/produk.module').then( m => m.ProdukPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./pages/transaksi/transaksi.module').then( m => m.TransaksiPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pages/pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./pages/tentang/tentang.module').then( m => m.TentangPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
