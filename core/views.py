from django.shortcuts import render
from .models import ScanReport, VulnerabilityFinding


def hero_view(request):
    """Landing page — the public-facing hero page."""
    return render(request, 'core/hero.html')


def dashboard_view(request):
    """Dashboard — deferred for now, returns placeholder."""
    scans = ScanReport.objects.order_by('-created_at')[:10]
    findings = VulnerabilityFinding.objects.order_by('-cvss_score')[:5]
    context = {
        'scans': scans,
        'findings': findings,
        'active_count': ScanReport.objects.filter(status='running').count(),
        'critical_count': VulnerabilityFinding.objects.filter(severity='CRITICAL').count(),
    }
    return render(request, 'core/dashboard.html', context)
