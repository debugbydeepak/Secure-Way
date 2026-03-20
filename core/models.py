from django.db import models


class ScanReport(models.Model):
    STATUS_CHOICES = [
        ('running', 'Running'),
        ('complete', 'Complete'),
        ('queued', 'Queued'),
    ]

    target_url = models.URLField(max_length=500)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='queued')
    endpoints_found = models.IntegerField(default=0)
    vuln_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.target_url} — {self.status}"


class VulnerabilityFinding(models.Model):
    SEVERITY_CHOICES = [
        ('CRITICAL', 'Critical'),
        ('HIGH', 'High'),
        ('MEDIUM', 'Medium'),
        ('LOW', 'Low'),
    ]

    FINDING_TYPE_CHOICES = [
        ('BOLA', 'BOLA'),
        ('XSS', 'XSS'),
        ('SQLi', 'SQL Injection'),
        ('SSRF', 'SSRF'),
        ('RCE', 'RCE'),
    ]

    scan = models.ForeignKey(ScanReport, on_delete=models.CASCADE, related_name='findings')
    name = models.CharField(max_length=255)
    endpoint = models.CharField(max_length=500)
    severity = models.CharField(max_length=10, choices=SEVERITY_CHOICES)
    cvss_score = models.FloatField(default=0.0)
    finding_type = models.CharField(max_length=10, choices=FINDING_TYPE_CHOICES)
    is_confirmed_poc = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-cvss_score']

    def __str__(self):
        return f"[{self.severity}] {self.name} — {self.endpoint}"
