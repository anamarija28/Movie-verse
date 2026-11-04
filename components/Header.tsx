"use client";

import { useEffect, useState } from "react";
import Link from "next/link"

export function Header() {
    return(
        <header className="site-header">
          <div className="container site-header-inner"> 

            {/* 1. Логото останува лево */}
            <Link href="/" className="site-logo">
              <span className="site-logo-mark">MV</span>
              <span>MovieVerse</span>
            </Link>

            {/* 2. Навигациските линкови сега се во средина */}
            <nav className="site-nav">
              <a href="/" className="site-nav-link">Home</a>
              <a href="/movies" className="site-nav-link">Movies</a>
              <a href="/actors" className="site-nav-link">Actors</a>
            </nav> 

            {/* 3. Search полето сега отиде скроз десно */}
            <form action="/search" method="get" className="header-search">
              <input 
                type="search" 
                name="q"
                id="header-search-q"
                placeholder="Search movies by title or by actor"
                className="input header-search-input"
                autoComplete="off"
               />
               <button type="submit" className="btn btn-primary btn-sm">Search</button>
            </form>

          </div>
        </header>
    )
}