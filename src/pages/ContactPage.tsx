import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/site';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'question_operateur',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    // Simulate working submission feedback
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Assistance & Rédaction</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Contacter Notre Équipe Éditoriale
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Une question concernant nos fiches d’analyse, une suggestion de mise à jour sur un agrément ANJ ou une question relative au respect du RGPD ? Nos journalistes et juristes vous répondent sous 48h ouvrées.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Message envoyé avec succès !</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Merci pour votre message, <strong>{formData.name}</strong>. Notre équipe éditoriale a bien reçu votre demande et vous répondra à l'adresse <code>{formData.email}</code> dans les plus brefs délais.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'question_operateur', message: '' });
                }}
                className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Votre nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex. Pierre Dubois"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Votre adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="pierre.dubois@exemple.fr"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1">
                  Motif de votre message *
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                >
                  <option value="question_operateur">Question concernant un opérateur de paris</option>
                  <option value="signalement_licence">Signalement ou vérification d'un agrément ANJ</option>
                  <option value="jeu_responsable">Question relative aux dispositifs de jeu responsable</option>
                  <option value="dpo_rgpd">Exercice des droits RGPD (DPO)</option>
                  <option value="autre">Autre demande éditoriale</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre demande en précisant si possible l'opérateur concerné..."
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmettre le message</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Corporate Contact Info & Warning Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Contact</h3>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline font-semibold">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 text-xs text-amber-900 space-y-3">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Rappel Important aux Parieurs</span>
            </div>
            <p className="leading-relaxed">
              ParisSportifs Comparateur est un portail indépendant d'information. Nous ne gérons aucun compte joueur, aucun solde financier et aucun litige sur les paris. Pour tout problème relatif à un compte de jeu chez un opérateur (validation de documents, virement de gains), vous devez contacter directement le service client de l'opérateur concerné.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
